class Flag extends HTMLElement{
  constructor(color1, color2, color3) {
    super();
    this.color1 = color1;
    this.color2 = color2;
    this.color3 = color3;
  }
  
  innerHTML = /*HTML*/`
  <h1 class = "flagBox" style = "background-color: ${color3}"> P </h1>
  <h1 class = "flagBox" style = "background-color: ${color1}"> R </h1>
  <h1 class = "flagBox" style = "background-color: ${color2}"> I </h1>
  <h1 class = "flagBox" style = "background-color: ${color1}"> D </h1>
  <h1 class = "flagBox" style = "background-color: ${color3}"> E </h1>
  `
}
