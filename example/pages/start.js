class PageStart extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = "<h1>Start Page</h1>";
    }

}

window.customElements.define("page-start", PageStart);
