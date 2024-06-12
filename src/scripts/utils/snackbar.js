const showSnackbar = (message) => {
	const snackbar = document.querySelector('#snackbar');
	if (!snackbar) return;
	snackbar.innerHTML = message;

	snackbar.className = 'show';

	// After 3 seconds, remove the show class from DIV
	setTimeout(() => {
		snackbar.className = snackbar.className.replace('show', '');
	}, 3000);
};

export default showSnackbar;
