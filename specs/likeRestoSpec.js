import FavoriteRestoIdb from '../src/scripts/data/restaurant-db';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Resto', () => {
	const addLikeButtonContainer = () => {
		document.body.innerHTML = '<div id="likeButtonContainer"></div>';
	};

	beforeEach(() => {
		addLikeButtonContainer();
	});

	it('should show the like button when the resto has not been liked before', async () => {
		await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

		expect(document.querySelector('[aria-label="like this restaurant"]'))
			.toBeTruthy();
	});

	it('should not show the unlike button when the resto has not been liked before', async () => {
		await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

		expect(document.querySelector('[aria-label="unlike this restaurant"]'))
			.toBeFalsy();
	});

	it('should be able to like the resto', async () => {
		await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

		document.querySelector('#likeButton').dispatchEvent(new Event('click'));
		const resto = await FavoriteRestoIdb.getRestaurant(1);

		expect(resto).toEqual({ id: 1 });

		FavoriteRestoIdb.deleteRestaurant(1);
	});

	it('should not add a resto again when its already liked', async () => {
		await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

		await FavoriteRestoIdb.putRestaurant({ id: 1 });
		document.querySelector('#likeButton').dispatchEvent(new Event('click'));
		expect(await FavoriteRestoIdb.getAllRestaurant()).toEqual([{ id: 1 }]);

		FavoriteRestoIdb.deleteRestaurant(1);
	});

	it('should not add a resto when it has no id', async () => {
		await TestFactories.createLikeButtonPresenterWithResto({ });

		document.querySelector('#likeButton').dispatchEvent(new Event('click'));
		expect(await FavoriteRestoIdb.getAllRestaurant()).toEqual([]);
	});
});
