import FavoriteRestaurantIdb from "../../data/favorite-restaurant-idb";
import {
    createRestaurantitemTemplate
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

        restaurants.forEach((restaurant) => {
            restaurantsContainer.innerHTML += createRestaurantitemTemplate(restaurant);
        });
    },
};

export default Favorite;