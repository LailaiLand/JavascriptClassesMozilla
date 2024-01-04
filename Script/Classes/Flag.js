class Flag extends HTMLElement {
  constructor(color1, color2, color3) {
    super();
    this.attachShadow({ mode: "open" });
    this.model.color1 = color1;
    this.model.color2 = color2;
    this.model.color3 = color3;
    this.root = document.createElement("div");
    this.shadowRoot.appendChild(this.root);
    this.root.innerHTML = /*HTML*/ `
    <h1 class = "flagBox" style = "background-color: ${this.model.color3}"> P </h1>
    <h1 class = "flagBox" style = "background-color: ${this.model.color1}"> R </h1>
    <h1 class = "flagBox" style = "background-color: ${this.model.color2}"> I </h1>
    <h1 class = "flagBox" style = "background-color: ${this.model.color1}"> D </h1>
    <h1 class = "flagBox" style = "background-color: ${this.model.color3}"> E </h1>
    `;
  }
}
