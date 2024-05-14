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
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    let restaurantValidation;
    try {
      // Coba untuk mengambil data restoran dari sumber data
      restaurantValidation = await RestaurantSource.detailRestaurant(url.id);
    } catch (error) {
      // Tangani kesalahan saat pengambilan data
      console.error('Failed to fetch restaurant data:', error);
      restaurantValidation = null;
    }

    // Tampilkan data restoran atau pesan kesalahan
    const restaurantContainer = document.querySelector('.detail-content');
    // const likeButtonContainer = document.querySelector('#likeButtonContainer')
    if (restaurantValidation) {
      // Jika data restoran berhasil diambil, tampilkan detail restoran
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
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
      restaurantContainer.innerHTML = "<p>Sorry, the data is not available. Please check your internet connection.</p>";
    }
  },
};
export default Detail;