import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
	constructor({
		button,
		content,
		drawer,
		hero,
	}) {
		this._button = button;
		this._content = content;
		this._drawer = drawer;
		this._hero = hero;

		this._initialAppShell();
	}

	_initialAppShell() {
		DrawerInitiator.init({
			button: this._button,
			content: this._content,
			drawer: this._drawer,
			hero: this._hero,
		});
	}

	async renderPage() {
		const url = UrlParser.parseActiveUrlWithCombiner();
		const page = routes[url];
		this._content.innerHTML = await page.render();
		await page.afterRender();

		const mainContent = document.getElementById('content');
		mainContent.setAttribute('tabindex', '0');

		const skipLinkElem = document.querySelector('.skip-content');
		skipLinkElem.addEventListener('click', (event) => {
			event.preventDefault();
			mainContent.focus();
		});
	}
}

export default App;
