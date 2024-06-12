import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// import styles
import '../styles/main.css';
import '../styles/responsiveness.css';
import '../styles/spinner.css';
import '../styles/home.css';
import '../styles/detail.css';
import '../styles/snackbar.css';

// import components
import './components/navi-bar';
import './components/hero';
import './components/footer-custom';

// init app
import App from './views/app';
import swRegister from './utils/sw-register';

const button = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const content = document.querySelector('#content');
const drawer = document.querySelector('#drawer');

const app = new App({
	button,
	drawer,
	content,
	hero,
});

window.addEventListener('hashchange', () => {
	// document.querySelector('.container').scrollIntoView();
	app.renderPage();
});

window.addEventListener('load', () => {
	app.renderPage();
	swRegister();
});
