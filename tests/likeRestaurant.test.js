import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
// import FavoriteMovieIdb from '../src/scripts/data/favorite-restaurant-idb';

// eslint-disable-next-line no-undef
describe('Liking A Movie', () => {
  // Case 1 Memunculkan tombol like ketika restaurant belum disukai
  // eslint-disable-next-line no-undef
  it('should show the like button when the restaurant has not been liked before', async () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';

    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });
    // eslint-disable-next-line no-undef
    expect(document.querySelector('[aria-label="like this movie"]')).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';

    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });
    // eslint-disable-next-line no-undef
    expect(document.querySelector('[aria-label="unlike this movie"]')).toBeFalsy();
  });
});
