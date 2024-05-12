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
                <a href="/">< Kembali</a>
              </div>
              <div class="detail-content">
              
              </div>
            </div>
        </section>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('.detail-content');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    console.log(restaurant);
  },
};

export default Detail;