import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import {
  createRestaurantitemTemplate,
} from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <section id="explore">
        <div class="container">
        <h2>Favorite Page</h2>
            <div class="explore-content">

            </div>
        </section>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('.explore-content');

    if (restaurants.length === 0) {
      restaurantsContainer.classList.remove('explore-content');
      restaurantsContainer.innerHTML = `
            <div class="no-data">
                <p class="no-data-text">You haven't added any restaurants to your favorites yet.</p>
            </div>
            `;
    } else {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantitemTemplate(restaurant);
      });
    }
  },
};

export default Favorite;
