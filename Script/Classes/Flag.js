(function () {
  class Flag extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.root = document.createElement("div");
      this.shadowRoot.appendChild(this.root);
      const sheet = new CSSStyleSheet();
      sheet.replaceSync(`
        .flagBox {
           width: 1500px; 
           height: 150px; 
           margin-top: 0px; 
           margin-bottom: 0px;
          }`);
      this.shadowRoot.adoptedStyleSheets = [sheet];
      this.model = {
        color1: "rgb(91, 206, 250)",
        color2: "rgb(245, 169, 184)",
        color3: "rgb(255, 255, 255)",
        text: "PRIDE",
      };
      this.updateView();
    }
    updateView() {
      for (let i = 0; i < this.model.text.length; i++) {
        const header = document.createElement("h1");
        header.className = "flagBox";
        header.textContent = this.model.text[i];

        header.style.backgroundColor =
          i == 0 || i == 4
            ? this.model.color1
            : i == 1 || i == 3
            ? this.model.color2
            : this.model.color3;

        this.root.appendChild(header);
      }
    }
  }
  customElements.define("trans-flag", Flag);
})();
