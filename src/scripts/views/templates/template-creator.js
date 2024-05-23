import CONFIG from '../../globals/config';

const createRestaurantitemTemplate = (restaurant) => `
<div class="explore-item">
<a href="/#/detail/${restaurant.id}">
  <div class="rating" tabindex="0">${restaurant.rating}</div>
    <img src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="Restaurant ${restaurant.name}" crossorigin="anonymous"/>
    <div class="card">
      <p class="city" tabindex="0">${restaurant.city}</p>
      <h3 class="name" tabindex="0">${restaurant.name}</h3>
      <p class="description" tabindex="0">${restaurant.description}</p>
  </div>
</a>
</div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
<div class="restaurant-info">
  <div class="restaurant-image">
  <img src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="Gambar Restoran">
  </div>
  <div class="restaurant-details">
  <h1 tabindex="0">${restaurant.name}</h1>
  <p tabindex="0">${restaurant.address}, ${restaurant.city}</p>
  <p class="restaurant-description" tabindex="0">${restaurant.description}</p>
  </div>
</div>
<div class="restaurant-menu">
  <div class="food-menu">
  <h2 tabindex="0">Foods</h2>
  <ul>
  ${restaurant.menus.foods.map((foods) => `<li tabindex="0">${foods.name}</li>`).join('')}
  </ul>
  </div>
  <div class="drink-menu">
  <h2 tabindex="0">Drinks</h2>
  <ul>
  ${restaurant.menus.drinks.map((drinks) => `<li tabindex="0">${drinks.name}</li>`).join('')}
  </ul>
  </div>
</div>

<div class="add-review">
  <h2>Add Your Review</h2>
  <form id="reviewForm">
    <label for="name">Your Name:</label><br>
    <input type="text" id="name" name="name" required>
    <label for="review">Your Review:</label>
    <textarea id="review" name="review" required></textarea>
    <button type="submit">Submit</button>
  </form>
</div>

<div class="customer-reviews">
  <h2 tabindex="0"  >Customer Reviews</h2>
  <div class="review-wrapper">
  ${createCustomerReviewTemplate(restaurant.customerReviews)}
  </div>
</div>
`;

const createCustomerReviewTemplate = (reviews) => reviews.map((review) => ` 
  <div class="review-card">
  <div class="review-header">
    <img src="./images/dummy-user.png" alt="Avatar" class="avatar">
    <div class="customer-info">
      <p class="customer-name" tabindex="0">${review.name}</p>
      <p class="date" tabindex="0">${review.date}</p>
    </div>
  </div>
    <p class="review-text" tabindex="0">${review.review}</p>
  </div>
  `).join('');

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantitemTemplate,
  createRestaurantDetailTemplate,
  createCustomerReviewTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
