import RestaurantSource from '../../data/restaurant-source';
import {
  createRestaurantitemTemplate,
} from '../templates/template-creator';
import 'lazysizes';

const Home = {
  async render() {
    return `
        <!-- HERO START -->
        <section class="hero">
          <div class="container">
            <div class="hero-content">
              <div id="hero" class="hero-text">
                <h1 tabindex="0">Explore the Flavors of RestaurantKu</h1>
                <p tabindex="0">Uncover Top Dining Experiences in Your City</p>
                <a href="#explore" class="explore-now-cta">Explore Now</a>
              </div>
              <div class="hero-image">
                <picture>
                  <source media="(max-width: 600px)" data-srcset="./images/heros/hero-image-small.jpg">
                  <source media="(min-width: 1025px)" data-srcset="./images/heros/hero-image-large.jpg">
                  <img class="lazyload" data-src="./images/heros/hero-image-large.jpg" alt="Hero Image" />
                </picture>
              </div>
            </div>
          </div>
        </section>
        <!-- HERO END -->
    
        <!-- EXPLORE START -->
        <div class="container explore">
          <div class="explore-text" tabindex="0">Explore Restaurant</div>
          <p class="explore-description" tabindex="0">Discover a variety of delicious foods and interesting dining places in your city. Start your culinary adventure now!</p>
        </div>
    
        <section id="explore">
          <div class="container">
            <div class="explore-content">
              <!-- List of restaurants will be dynamically generated here -->
            </div>
          </div>
        </section>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.listRestaurants();
    const restaurantContainer = document.querySelector('.explore-content');

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantitemTemplate(restaurant);
    });

    // Initialize lazysizes after adding restaurant items
    lazySizes.init();
  },
};

export default Home;
