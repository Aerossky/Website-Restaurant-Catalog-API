import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import {
  createRestaurantDetailTemplate,
  createCustomerReviewTemplate, // Impor fungsi template review
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import CONFIG from '../../globals/config';
import formatDate from '../../utils/date-formatter';

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
      restaurant = await RestaurantSource.detailRestaurant(url.id);
    } catch (error) {
      console.error('Failed to fetch restaurant data:', error);
      restaurant = null;
    }

    const restaurantContainer = document.querySelector('.detail-content');
    const likeButtonContainer = document.querySelector('#likeButtonContainer');

    if (restaurant) {
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

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

      const reviewForm = document.getElementById('reviewForm');
      reviewForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const review = document.getElementById('review').value;

        const reviewData = {
          id: url.id,
          name,
          review,
        };

        try {
          const response = await fetch(`${CONFIG.BASE_URL}/review`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewData),
          });

          const result = await response.json();

          if (!result.error) {
            restaurant.customerReviews.push({
              name,
              review,
              date: formatDate(new Date()), // Format the date here
            });

            const reviewContainer = document.querySelector('.review-wrapper');
            reviewContainer.innerHTML = createCustomerReviewTemplate(restaurant.customerReviews);
          } else {
            alert('Failed to submit review');
          }
        } catch (error) {
          console.error('Failed to submit review:', error);
          alert('Failed to submit review');
        }
      });
    } else {
      restaurantContainer.innerHTML = `
      <div class="no-connection">
        <p>Sorry, the data is not available. Please check your internet connection.</p>
      </div>
    `;
      likeButtonContainer.style.display = 'none';
    }
  },
};

export default Detail;
