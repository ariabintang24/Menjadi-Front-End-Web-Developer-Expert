class FooterCustom extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
           <footer class="footer-text">
      <p>Copyright &copy; 2023 - Restoooku</p>
    </footer>
          `;
	}
}

customElements.define('restooku-footer', FooterCustom);
