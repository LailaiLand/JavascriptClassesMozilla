const main = document.getElementById("app");

//lager en instans av klassen
const baking = new KakeBake();

//lager en ny klasse via uttrykk, heller enn en egen fil en må new-e
const expressionBaking = class KakeBakeUttrykk {
  smak = "jordbær";
};
const nyBaking = new expressionBaking();

//lese et felt laget av constructor
console.log("Kakesmak", baking.kakeSmak);

//lese felt i uttrykket for å se om det virker på samme måte
console.log("Uttrykkssmak", nyBaking.smak);

//legg merke til at statiske felt leses rett fra klassen, ikke fra instansen
console.log("Statisk test", KakeBake.kakeTopping);
console.log("Kan ikke statiske felt leses fra instansen?", baking.kakeTopping);
console.log("Test felt uten statisk", KakeBake.kakeSmak);

//den eksponerte metoden returnerer det private feltet
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

const trans = document.createElement("trans-flag");
main.appendChild(trans);
console.log("flag tag", trans);

function getColors(source) {
  let colorString =
    "rgb(" +
    source.Red +
    ", " +
    source.Green +
    ", " +
    source.Blue +
    ")";
  return colorString;
}
