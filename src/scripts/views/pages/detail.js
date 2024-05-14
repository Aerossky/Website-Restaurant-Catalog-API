import UrlParser from '../../routes/url-parser';
import RestaurantSource from "../../data/restaurant-source";
import {
  createRestaurantDetailTemplate
} from '../templates/template-creator';

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
    if (restaurant) {
      // Jika data restoran berhasil diambil, tampilkan detail restoran
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    } else {
      // Jika tidak ada data restoran (atau terjadi kesalahan saat pengambilan), tampilkan pesan
      restaurantContainer.innerHTML = "<p>Sorry, the data is not available. Please check your internet connection.</p>";
    }
  },
};
export default Detail;