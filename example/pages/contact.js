class PageContact extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = "<h1>Contact Page</h1>";
    }

}

window.customElements.define("page-contact", PageContact);
