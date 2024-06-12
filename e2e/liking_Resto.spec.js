const assert = require('assert');

Feature('Liking Resto');

Scenario('liking a resto and unliking it', async ({ I }) => {
	I.amOnPage('/');

	I.seeElement('#explore-restaurant-list');

	const firstRestaurant = locate('#explore-restaurant-list .contentbox-title').first();
	const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

	I.click(firstRestaurant);

	I.waitForElement('#likeButton', 3);
	I.seeElement('#likeButton');
	I.click('#likeButton');

	I.amOnPage('/#/favorite');
	I.seeElement('#explore-restaurant-list');
	const likedRestoTitle = await I.grabTextFrom('#explore-restaurant-list .contentbox-title');

	assert.strictEqual(firstRestaurantTitle, likedRestoTitle);

	I.click(likedRestoTitle);

	I.seeElement('#likeButton');
	I.click('#likeButton');

	I.amOnPage('/#/favorite');

	I.seeElement('.explore-restaurant-list__not__found__text');
	const noLikedResto = await I.grabTextFrom('.explore-restaurant-list__not__found__text');
	assert.strictEqual(noLikedResto, 'You don\'t have any favorite restaurant yet.');
});

Scenario('liking three restaurants and check them on favorite page', async ({ I }) => {
	I.amOnPage('/#/');

	I.seeElement('#explore-restaurant-list');

	const restaurants = [];

	for (let i = 1; i <= 3; i++) {
		const selectedRestaurant = locate('#explore-restaurant-list .contentbox-title').at(i);
		const selectedRestaurantName = await I.grabTextFrom(selectedRestaurant);
		restaurants.push(selectedRestaurantName);

		I.click(selectedRestaurant);

		I.waitForElement('#likeButton', 3);
		I.seeElement('#likeButton');
		I.click('#likeButton');
		I.amOnPage('/#/');
	}

	I.amOnPage('/#/favorite');
	I.seeElement('#explore-restaurant-list');

	for (let i = 1; i <= 3; i++) {
		const likedRestaurant = locate('#explore-restaurant-list .contentbox-title').at(i);
		const likedRestaurantName = await I.grabTextFrom(likedRestaurant);
		assert.strictEqual(restaurants[i - 1], likedRestaurantName);
	}

	I.amOnPage('/#/favorite');
});
