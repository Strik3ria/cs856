class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="footer">Copyright Taniti @ 2022</footer>;
    `;
  }
}

customElements.define("taniti-footer", Footer);
