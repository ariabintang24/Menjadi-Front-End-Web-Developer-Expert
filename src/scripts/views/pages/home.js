import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantCardTemplate } from '../templates/template-creator';
import Spinner from '../templates/spinner';

const Home = {
	async render() {
		return `
			<div class='container'>
				<div id="spinner-container"></div>
				<div id="main-container">
					<h2 tabindex="0" class="explore-restaurant__label">Explore Restaurant</h2>
					<section id="explore-restaurant-list"></section>
				</div>
			</div>
    `;
	},

	async afterRender() {
		const indikatorLoading = document.querySelector('#spinner-container');
		const mainContainer = document.querySelector('#main-container');

		// ketika loading tampilkan spinner
		indikatorLoading.innerHTML = Spinner();
		mainContainer.style.display = 'none';

		const restaurantContainer = document.querySelector(
			'#explore-restaurant-list',
		);
		restaurantContainer.innerHTML = '';

		try {
			const listRestaurant = await RestaurantSource.getRestaurants();
			console.log(listRestaurant);
			listRestaurant.forEach((restaurant) => {
				restaurantContainer.innerHTML
          += createRestaurantCardTemplate(restaurant);
			});
			indikatorLoading.style.display = 'none';
			mainContainer.style.display = 'block';
		} catch (error) {
			indikatorLoading.style.display = 'none';
			mainContainer.style.display = 'block';
			restaurantContainer.innerHTML = `<h3 class="error">Error: ${error.message}</h3>`;
		}
	},
};

export default Home;
