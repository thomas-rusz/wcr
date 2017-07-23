class WCRouter extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        window.addEventListener("hashchange", this);
        this.onhashchange();
    }

    handleEvent(event) {
        const eventKey = `on${event.type}`;
        const eventHandler = this[eventKey];
        eventHandler.call(this, event);
    }

    set default(value) {
        this.setAttribute("default", value);
    }

    get default() {
        return this.getAttribute("default") || "";
    }

    onhashchange() {
        let page;
        let content;

        page = location.hash.replace("#/", "");

        if (!page.length) {
            page = this.default;
        }

        if (this.currentPage === page) {
            return;
        }

        this.currentPage = page;
        content = document.createElement(page);

        this.innerHTML = "";
        this.appendChild(content);
    }

}
window.customElements.define("wc-router", WCRouter);
