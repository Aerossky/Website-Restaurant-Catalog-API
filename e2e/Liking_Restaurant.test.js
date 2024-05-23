const assert = require('assert');

Feature('Liking Restaurant');

Scenario('showing empty liked movies', ({ I }) => {
  I.amOnPage('/#/favorite');
  I.see("You haven't added any restaurants to your favorites yet.", '.no-data-text');
  I.amOnPage('/');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.explore-item .card .name');
  const firstRestaurant = locate('.explore-item .card .name').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.explore-item');
  const likedRestaurantTitle = await I.grabTextFrom('.name');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
