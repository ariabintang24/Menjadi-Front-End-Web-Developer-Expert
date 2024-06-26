import FavoriteRestaurantIdb from '../data/restaurant-db';
import {
	createLikeButtonTemplate,
	createLikedButtonTemplate,
} from '../views/templates/template-creator';
import showSnackbar from './snackbar';

const LikeButtonInitiatior = {
	async init({ likeButtonContainer, restaurant }) {
		this._likeButtonContainer = likeButtonContainer;
		this._restaurant = restaurant;

		await this._renderButton();
	},

	async _renderButton() {
		const { id } = this._restaurant;

		if (await this._isRestaurantExist(id)) {
			this._renderLikedButton();
		} else {
			this._renderLikeButton();
		}
	},

	async _isRestaurantExist(id) {
		const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
		return !!restaurant;
	},

	_renderLikeButton() {
		this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

		const likeButton = document.getElementById('likeButton');
		likeButton.addEventListener('click', async () => {
			await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
			showSnackbar('Favorited');
			this._renderButton();
		});
	},

	_renderLikedButton() {
		this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

		const likedButton = document.getElementById('likeButton');
		likedButton.addEventListener('click', async () => {
			await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
			showSnackbar('Unfavorited');
			this._renderButton();
		});
	},
};

export default LikeButtonInitiatior;
