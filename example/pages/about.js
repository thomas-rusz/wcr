class PageAbout extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = "<h1>About Page</h1>";
    }

}

window.customElements.define("page-about", PageAbout);
