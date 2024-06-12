class Hero extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
          <div
        class="hero"
      >
        <div class="hero-inner">
          <h1 class="hero-title">Restoooku</h1>
          <p class="hero-subtitle">
            Looking for the Best Restaurant? <br />
            You're in the Right Place.
          </p>
        </div>
      </div>
          `;
	}
}

customElements.define('restooku-hero', Hero);
