Feature('Reviewing Restaurant');

Scenario('Add review to restaurant', async ({ I }) => {
  I.amOnPage('#/');

  I.seeElement('.explore-item .card .name');
  I.click(locate('.explore-item .card .name').first());

  const name = 'John Doe';
  const review = 'A very nice restaurant!';

  I.fillField('#name', name);
  I.fillField('#review', review);
  I.click('Submit');

  I.see(name, '.customer-name');
  I.see(review, '.review-text');
});
