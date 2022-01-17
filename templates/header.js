class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar">
        <div class="top-nav">
          <div class="taniti-brand">
            <img src="taniti_logo.png" />
          </div>
          <div class="taniti-search">
            <button type="submit">Search</button>
            <input type="text" placeholder="Search..."/>
          </div>
        </div>
        <div class="bottom-nav">
          <ul class="nav-list">
            <li class="nav-item"><a href="index.html">Home</a></li>
            <li class="nav-item"><a href="restaurants.html">Restaurants</a></li>
            <li class="nav-item"><a href="grocery-stores.html">Grocery Stores</a></li>
            <li class="nav-item"><a href="lodging.html">Lodging</a></li>
            <li class="nav-item"><a href="entertainment.html">Entertainment</a></li>
            <li class="nav-item"><a href="sightseeing.html">Sightseeing</a></li>
            <li class="nav-item"><a href="air-sea-travel.html">Air/Sea Travel</a></li>
            <li class="nav-item"><a href="ground-transportation.html">Ground Transportation</a></li>
            <li class="nav-item"><a href="faq.html">FAQ</a></li>
          </ul>
        </div>
      </nav>
    `;
  }
}

customElements.define("taniti-header", Header);
