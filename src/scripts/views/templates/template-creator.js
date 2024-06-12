import CONFIG from '../../globals/config';

const createRestaurantCardTemplate = (restaurant) => `
  <article tabindex="0" class="box">
    <a href="${`/#/detail/${restaurant.id}`}">
    <div class="imgboxcontainer">
      <img class="imagebox lazyload" alt="${restaurant.name}" 
        data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"/>
      <span class="location-box">
        <span>${restaurant.city}</span>
      </span>
    </div>

    <div class="contentbox">
      <p class="contentbox-title">${restaurant.name}</p>
      <div class="contentbox-rating">Rating: <span class="ratebox">
        <span>${restaurant.rating}</span>
      </span></div>
      <p class="contentbox-description">${restaurant.description}</p>
    </div></a>
  </article>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <section class='detail-container'>
    <div class="detail">
      <div tabindex="0" class="container-info">
        <div class="img-container">
          <img class="detail-img" alt="${restaurant.name}" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"/>
          <span>
          ${restaurant.city} 
          </span>
        </div>

        <ul class="detail-info">
          <li class="resto-name">
            <p class="detail-name-address-rating">${restaurant.name}</p>
          </li>

          <li class="resto-rating">
            Rating : <span>${restaurant.rating}</span>
          </li>

          <li class="resto-address">
            <p>${restaurant.address}, ${restaurant.city}</p>
          </li>
          <li><p class="detail-desc">${restaurant.description}</p></li>

          <li class="resto-category">${restaurant.categories
		.map(
			(category) => `
                <span class="category">${category.name}</span>
              `,
		)
		.join('')}
          </li>
        </ul>
      </div>

      <div class='detail-flex'>
        <div class='flex-menu'>
          <h3 tabindex="0">Menu</h3>

          <div tabindex="0" class="detail-menu">
            <div class="detail-food">
              <h4>Food</h4>
              <ul>
                ${restaurant.menus.foods
		.map(
			(food) => `
                      <li><p>${food.name}</p></li>
                    `,
		)
		.join('')}
              <ul>
            </div>

            <div class="detail-drink">
              <h4>Drink</h4>
              <ul>
                ${restaurant.menus.drinks
		.map(
			(drink) => `
                      <li><p>${drink.name}</p></li>
                    `,
		)
		.join('')}
              <ul>
            </div>
          </div>
        </div>
      <div>

      <h3 tabindex="0" class="title-review">Reviews</h3>

      <div tabindex="0" class="detail-review">
        <div class="form-review">
          <form>
            <div class="bg-3">
              <label for="inputName" class="formlab">Name</label>
              <input name="inputName" type="text" class="formctrl" id="inputName">
            </div>
            <div class="bg-3">
              <label for="inputReview" class="formlab">Review</label>
              <input name="inputReview" type="text" class="formctrl" id="inputReview">
            </div>
            <button id="submit-review" type="submit" class="formbtn">Submit</button>
          </form>
        </div>

        ${restaurant.customerReviews
		.map(
			(review) => `
              <div class="detail-review-item">
                <div class="header-review">
                  <p class="name-review"><i title="restaurant" class="fa fa-user-circle" style="font-size:1.3em; padding-right:10px;"></i>${review.name}</p>

                  <p class="date-review">${review.date}</p>
                </div>

                <div class="body-review">
                  ${review.review}
                </div>
              </div>
            `,
		).join('')}
          </div>
        </div>
      </div>
    </div>
  </section>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart heart-unlike" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart heart-like" aria-hidden="true"></i>
  </button>
`;

const loading = () => `
  <div class="loading">loading</div>
`;

export {
	createRestaurantCardTemplate,
	createRestaurantDetailTemplate,
	createLikeButtonTemplate,
	createLikedButtonTemplate,
	loading,
};
