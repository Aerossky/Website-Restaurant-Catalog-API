Feature('Unliking Restaurant');

Scenario('unliking one restaurant', async ({ I }) => {
  I.amOnPage('#/');
  I.seeElement('.explore-item .card .name');
  I.click(locate('.explore-item .card .name').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.explore-item');
  const firstLikedRestaurant = locate('.explore-item .card .name').first();
  I.click(firstLikedRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see("You haven't added any restaurants to your favorites yet.", '.no-data-text');
  I.amOnPage('/');
});
