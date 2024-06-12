class NavBar extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
          <nav id="drawer" class="nav-mobile">
      <a class="logo" href="/">Restoooku</a>
      <ul class="nav-list-mobile">
        <li><a href="/" class="nav-items-mobile">Home</a></li>
        <li><a href="#/favorite" class="nav-items-mobile">Favorite</a></li>
        <li>
          <a
            target="_blank"
            href="https://instagram.com/ariabintangr?igshid=OGQ5ZDc2ODk2ZA=="
            class="nav-items-mobile"
            >About Us</a
          >
        </li>
      </ul>
    </nav>
          `;
	}
}

customElements.define('nav-bar', NavBar);
