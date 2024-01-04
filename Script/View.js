const main = document.getElementById("app");
const baking = new KakeBake();
const expressionBaking = class KakeBakeUttrykk {
  smak = "jordbær";
};
const nyBaking = new expressionBaking();
console.log("Kakesmak", baking.kakeSmak);
console.log("Uttrykkssmak", nyBaking.smak);
console.log("Statisk test", KakeBake.kakeTopping);
console.log("Test felt uten statisk", KakeBake.kakeSmak);
console.log("Test lese privat felt", baking.bekledning);
console.log("Ta på klær", baking.suitUp());

const fab = new Color(255, 170, 187);
console.log("Fab farge", fab.values);
const fabBox = document.createElement("p");
fabBox.style.backgroundColor = getColors(fab);
fabBox.innerHTML = "FAB";

const white = new Color(255, 255, 255);
const whiteBox = document.createElement("p");
whiteBox.style.backgroundColor = getColors(white);
whiteBox.innerHTML = "White";

const afe = new Color(
  parseInt("AA", 16),
  parseInt("FF", 16),
  parseInt("EE", 16)
);
const afeBox = document.createElement("p");
afeBox.style.backgroundColor = getColors(afe);
afeBox.innerHTML = "AFE";
main.appendChild(afeBox);
main.appendChild(fabBox);
main.appendChild(whiteBox);

function getColors(source) {
  let colorString = "rgb(";
  for (let i = 0; i < source.values.length; i++) {
    colorString += `${source.values[i]}`;
    if (i == source.values.length - 1) {
      colorString += ")";
    } else colorString += ",";
  }
  return colorString;
}
