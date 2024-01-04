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
