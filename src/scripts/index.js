import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import data from '../public/data/DATA.json';
import App from './views/app';


console.log('Hello Coders! :)');

console.log(data);

const app = new App({
    button: document.querySelector('#hamburgerButton'),
    drawer: document.querySelector('#navigationDrawer'),
    content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
})


// document.addEventListener('DOMContentLoaded', function () {
//     const exploreContent = document.querySelector('.explore-content');


//     const restaurantData = data.restaurants;

//     restaurantData.forEach(restaurant => {
//         // Template HTML untuk setiap item restoran
//         const restaurantCardHTML = `
//             <div class="explore-item">
//                 <div class="rating" tabindex="0">${restaurant.rating}</div>
//                 <img src="${restaurant.pictureId}" alt="Restaurant ${restaurant.name}"/>
//                 <div class="card">
//                     <p class="city" tabindex="0">${restaurant.city}</p>
//                     <h3 class="name" tabindex="0">${restaurant.name}</h3>
//                     <p class="description" tabindex="0">${restaurant.description}</p>
//                 </div>
//             </div>
//         `;

//         exploreContent.insertAdjacentHTML('beforeend', restaurantCardHTML);
//     });
// });