import { Workbox } from 'workbox-window';

const swRegister = async () => {
	if ('serviceWorker' in navigator) {
		const wb = new Workbox('./sw.js');
		wb.addEventListener('waiting', () => {
			console.log('sw added');
		});

		wb.addEventListener('activated', (event) => {
			if (!event.isUpdate) {
				console.log('sw aktif!');
			}
		});

		wb.register();
	}
	console.log('Service worker not supported in this browser');
};

export default swRegister;
