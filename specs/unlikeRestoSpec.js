import FavoriteRestoIdb from '../src/scripts/data/restaurant-db';
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
	document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unliking A Resto', () => {
	beforeEach(async () => {
		addLikeButtonContainer();
		await FavoriteRestoIdb.putRestaurant({ id: 1 });
	});

	afterEach(async () => {
		await FavoriteRestoIdb.deleteRestaurant(1);
	});

	it('should display unlike widget when the resto has been liked', async () => {
		await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

		expect(document.querySelector('[aria-label="unlike this restaurant"]'))
			.toBeTruthy();
	});

	it('should not display like widget when the resto has been liked', async () => {
		await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

		expect(document.querySelector('[aria-label="like this restaurant"]'))
			.toBeFalsy();
	});

	it('should be able to remove liked resto from the list', async () => {
		await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

		document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
		expect(await FavoriteRestoIdb.getAllRestaurant()).toEqual([]);
	});

	it('should not throw error if the unliked resto is not in the list', async () => {
		await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

		await FavoriteRestoIdb.deleteRestaurant(1);

		document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
		expect(await FavoriteRestoIdb.getAllRestaurant()).toEqual([]);
	});
});
