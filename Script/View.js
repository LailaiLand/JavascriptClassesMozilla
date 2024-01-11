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

//bruker klasse til å sette en RGB-verdi
const fab = new Color(255, 170, 187);
console.log("Fab farge", fab.values);
const fabBox = document.createElement("p");
fabBox.style.backgroundColor = fab.toString();
fabBox.innerHTML = "FAB";

const white = new Color(255, 255, 255);
const whiteBox = document.createElement("p");
whiteBox.style.backgroundColor = white.toString();
whiteBox.innerHTML = "White";

//en kan sende hexadecimaler til parseInt, om en sier til den at det er 16-tallssystemet
const afe = new Color(
  parseInt("AA", 16),
  parseInt("FF", 16),
  parseInt("EE", 16)
);
const afeBox = document.createElement("p");
afeBox.style.backgroundColor = afe.toString();
afeBox.innerHTML = "AFE";
addThis(afeBox);
addThis(fabBox);
addThis(whiteBox);

//tidlig forsøk på web-komponent. Litt usikker på define.customElement og connectedCallback, må læres om
const trans = document.createElement("trans-flag");
addThis(trans);
console.log("flag tag", trans);

//test av statisk initialiseingsblokk. pre-loaded farger en kan kalle på uten instans
const redList = document.createElement("ul");
redList.style.backgroundColor = Color.red;
redList.innerHTML = "foo";
const greyList = document.createElement("ul");
greyList.style.backgroundColor = Color.grey;
greyList.innerHTML = "bar";
const transparentGreen = new AlphaColor(0, 255, 0, 0.2);
const transGreenBox = document.createElement("ul");
transGreenBox.style.backgroundColor = transparentGreen.toString();
console.log("alpha toString?", transparentGreen.toString())
transGreenBox.innerHTML = "fucked up beyoand all recognition";
greyList.appendChild(transGreenBox);
redList.appendChild(greyList);
addThis(redList);

//merk at "get Red()" i klassen er en metode, men prefixen "get" eksponerer den private verdien som et offentlig felt
// function source).toString(){
//   let colorString =
//     "rgb(" +
//     source.Red +
//     ", " +
//     source.Green +
//     ", " +
//     source.Blue +
//     ", " +
//     alphaCheck(source) +
//     ")";
//   return colorString;
// }

//hjelpefunksjon så jeg kan slenge på lett, uten å gå innom "main" manuelt
function addThis(element) {
  main.appendChild(element);
}

function alphaCheck(source) {
  if (source.alpha === undefined) {
    return "1";
  } else return source.alpha;
}
