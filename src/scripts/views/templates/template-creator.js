import CONFIG from "../../globals/config";


const createRestaurantitemTemplate = (restaurant) => `
<div class="explore-item">
<a href="/#/detail/${restaurant.id}">
  <div class="rating" tabindex="0">${restaurant.rating}</div>
    <img src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="Restaurant ${restaurant.name}"/>
    <div class="card">
      <p class="city" tabindex="0">${restaurant.city}</p>
      <h3 class="name" tabindex="0">${restaurant.name}</h3>
      <p class="description" tabindex="0">${restaurant.description}</p>
  </div>
</a>
</div>
`;


export {
  createRestaurantitemTemplate
};