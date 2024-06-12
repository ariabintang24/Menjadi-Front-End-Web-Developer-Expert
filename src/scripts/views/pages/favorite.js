import FavoriteRestaurantIdb from '../../data/restaurant-db';
import { createRestaurantCardTemplate } from '../templates/template-creator';

const Favorite = {
	async render() {
		return `
			<div>
				<h2 tabindex="0" class="explore-restaurant__label">Favorite</h2>
				<section id="explore-restaurant-list"></section>
			</div>
    `;
	},

	async afterRender() {
		const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
		const restaurantContainer = document.getElementById('explore-restaurant-list');
		const content = document.querySelector('#content div');

		if (restaurants.length === 0) {
			content.innerHTML += `
        <div class="explore-restaurant-list__not__found">
          <h3 class="explore-restaurant-list__not__found__text">You don't have any favorite restaurant yet.</h3>
        </div>
      `;
		}

		restaurants.forEach((restaurant) => {
			restaurantContainer.innerHTML += createRestaurantCardTemplate(restaurant);
		});

		const skipLinkElem = document.querySelector('.skip-content');
		skipLinkElem.addEventListener('click', (event) => {
			event.preventDefault();
			document.querySelector('#content').focus();
		});
	},
};

export default Favorite;
