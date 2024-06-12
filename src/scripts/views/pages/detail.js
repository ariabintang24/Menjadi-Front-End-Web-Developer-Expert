import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiatior from '../../utils/like-button-initiator';
import PostReview from '../../utils/post-review-initiator';

const Detail = {
	async render() {
		return `
			<div class="main">
				<h2 tabindex="0" class="explore-restaurant__label">Detail Restaurant</h2>
					<section id="detail-rest"></section>
					<div class="like" id="likeButtonContainer"></div>
				</div>
      <div id="likeButtonContainer"></div>
    `;
	},

	async afterRender() {
		const url = UrlParser.parseActiveUrlWithoutCombiner();
		const restaurant = await RestaurantSource.detailRestaurant(url.id);
		const restaurantContainer = document.getElementById('detail-rest');
		restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

		LikeButtonInitiatior.init({
			likeButtonContainer: document.getElementById('likeButtonContainer'),
			restaurant: {
				id: restaurant.id,
				name: restaurant.name,
				city: restaurant.city,
				pictureId: restaurant.pictureId,
				description: restaurant.description,
				rating: restaurant.rating,
			},
		});

		const submitReview = document.getElementById('submit-review');
		submitReview.addEventListener('click', (event) => {
			event.preventDefault();
			PostReview();
		});

		const skipLinkElem = document.querySelector('.skip-content');
		skipLinkElem.addEventListener('click', (event) => {
			event.preventDefault();
			document.querySelector('#content').focus();
		});
	},
};

export default Detail;
