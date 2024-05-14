import UrlParser from '../../routes/url-parser';
import RestaurantSource from "../../data/restaurant-source";
import {
  createRestaurantDetailTemplate
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
        <section class="restaurant-detail">
            <div class="container">
              <div class="kembali">
                <a href="#/home">< Kembali</a>
              </div>
              <div class="detail-content">
              
              </div>
              <div id="likeButtonContainer"></div>
            </div>
        </section>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    let restaurant;
    try {
      // Coba untuk mengambil data restoran dari sumber data
      restaurant = await RestaurantSource.detailRestaurant(url.id);
    } catch (error) {
      // Tangani kesalahan saat pengambilan data
      console.error('Failed to fetch restaurant data:', error);
      restaurant = null;
    }

    // Tampilkan data restoran atau pesan kesalahan
    const restaurantContainer = document.querySelector('.detail-content');
    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    if (restaurant) {
      // Jika data restoran berhasil diambil, tampilkan detail restoran
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

      // Inisialisasi tombol suka hanya jika data restoran berhasil diambil
      LikeButtonInitiator.init({
        likeButtonContainer,
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          description: restaurant.description,
          pictureId: restaurant.pictureId,
          city: restaurant.city,
          rating: restaurant.rating,
        },
      });
    } else {
      // Jika tidak ada data restoran (atau terjadi kesalahan saat pengambilan), tampilkan pesan
      restaurantContainer.innerHTML = `
      <div class="no-connection">
        <img src="./images/gif/no-connection.gif" alt="No Data Available" style="" />
        <p>Sorry, the data is not available. Please check your internet connection.</p>
      </div>
    `;
      // Sembunyikan kontainer tombol suka jika data restoran tidak tersedia
      likeButtonContainer.style.display = 'none';
    }
  },
};
export default Detail;