import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';

const createLikeButtonPresenterWithResto = async (restaurant) => {
	await LikeButtonInitiator.init({
		likeButtonContainer: document.querySelector('#likeButtonContainer'),
		restaurant,
	});
};

export { createLikeButtonPresenterWithResto };
