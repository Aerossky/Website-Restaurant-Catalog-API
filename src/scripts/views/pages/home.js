import RestaurantSource from '../../data/restaurant-source';
import {
  createRestaurantitemTemplate,
} from '../templates/template-creator';

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
                <img src="./images/heros/hero-image_1.jpg" alt="Hero Image" />
              </div>
            </div>
          </div>
        </section>
        <!-- HERO END -->
    
        <!-- EXPLORE START -->
        <div class="container explore">
          <div class="explore-text" tabindex="0">Explore Restaurant</div>
          <p class="explore-description" tabindex="0">Discover a variety of delicious foods and interesting dining places in
            your city.
            Start
            your culinary adventure now!</p>
        </div>
    
        <section id="explore">
          <div class="container">
    
            <div class="explore-content">
    
              <!-- <div class="explore-item">
                <div class="rating">4.6</div>
                <img src="https://restaurant-api.dicoding.dev/images/medium/41" />
                <div class="card">
                  <p class="city">City Name</p>
                  <h3 class="name">name</h3>
                  <p class="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, tempore.</p>
                </div>
              </div> -->
    
    
            </div>
        </section>

    <section id="explore">
      <div class="container">

        <div class="explore-content">

          <!-- <div class="explore-item">
            <div class="rating">4.6</div>
            <img src="https://restaurant-api.dicoding.dev/images/medium/41" />
            <div class="card">
              <p class="city">City Name</p>
              <h3 class="name">name</h3>
              <p class="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, tempore.</p>
            </div>
          </div> -->

        </div>
    </section>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurants = await RestaurantSource.listRestaurants();
    const restaurantContainer = document.querySelector('.explore-content');

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantitemTemplate(restaurant);
    });
  },
};

export default Home;
