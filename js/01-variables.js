console.log('Kintamieji');

const pirmas = 5;
const antras = 7;

console.log(pirmas);
console.log(antras);

const vardas = "Vardenis";
const pavarde = "Pavardenis";

console.log(vardas);
console.log(pavarde);

const adresas = "Gatves g., 12-34, Miestas Valstybe. VA-12345";
console.log(adresas);

console.log ("--------------------");
let pinigine = 0;
console.log("Pinigineje yra:", pinigine);

const pirmasPinigas = 5;
console.log("Pirmas pinigas", pirmasPinigas);

pinigine = pinigine + pirmasPinigas;
console.log("Pinigineje yra:", pinigine);

const antrasPinigas =20;
console.log("Antras pinigas", antrasPinigas);

pinigine = pinigine + antrasPinigas;
console.log("Pinigineje yra:", pinigine);

const treciasPinigas =50;
console.log("Trecias pinigas", treciasPinigas);

pinigine = pinigine + treciasPinigas;
console.log("Pinigineje yra:", pinigine);

const pirmaIslaida = 40;
console.log("Pirma islaida:", pirmaIslaida);

pinigine = pinigine - pirmaIslaida;
console.log("Pinigineje yra:", pinigine);

const antraIslaida = 40;
console.log("Pirma islaida:", pirmaIslaida);

pinigine = pinigine - antraIslaida;
console.log("Pinigineje yra:", pinigine);

console.log ("--------------------");

const pirmasZodis = "Pirmas";
const antrasZodis = "zodis";

const sakinys = pirmasZodis + " " + antrasZodis + " ";
console.log(1, pirmasZodis);
console.log(2, antrasZodis);
console.log(3, sakinys);

console.log ("--------------------");

const kabutes1 = "It`s my name";
console.log(kabutes1);

const kabutes2 = `Tai vadinasi "Cepelinas" ar kazkas panasiai`;
console.log(kabutes2);

console.log ("--------------------");

const kabutes12 = 'Cia yra vienguba (\'), o cia yra dviguba (") kabutes.';
const kabutes21 = "Cia yra vienguba ('), o cia yra dviguba (\") kabutes.";
console.log(kabutes12);
console.log(kabutes21);

console.log ("--------------------");

const kabutes120 = 'Cia yra vienguba (\'), o cia yra dviguba (\") kabutes.';
const kabutes210 = "Cia yra vienguba (\'), o cia yra dviguba (\") kabutes.";
console.log(kabutes120);
console.log(kabutes210);

console.log ("--------------------");

// Pagrindinis aktorius yra Chuck Norris filme "Volkeris. Teksaso reindzeris"
const aktoriausVardas = "Chuck";
const aktoriausPavarde = "Norris";
const filmoPavadinimas = "Volkeris. Teksaso reindzeris"

const filmas1 = `Pagrindinis aktorius yra ` + aktoriausVardas + ` ` + aktoriausPavarde + ` filme "` + filmoPavadinimas + `".`;
console.log(1, filmas1);

const filmas2 = "Pagrindinis aktorius yra " + aktoriausVardas + " " + aktoriausPavarde + " filme \"" + filmoPavadinimas + "\".";
console.log(2, filmas2);

const filmas3 = `Pagrindinis aktorius yra ${aktoriausVardas} ${aktoriausPavarde} filme "${filmoPavadinimas}"`;
console.log(3, filmas3);

console.log ("--------------------");

// Viengubos ('), dvigubos ("), backtick'as (`).
const kabuciuCombo1 = 'Viengubos (\'), dvigubos ("), backtick\'as (`).';
const kabuciuCombo2 = "Viengubos ('), dvigubos (\"), backtick'as (`).";
const kabuciuCombo3 = `Viengubos ('), dvigubos ("), backtick'as (\`).`;

console.log(1, kabuciuCombo1);
console.log(2, kabuciuCombo2);
console.log(3, kabuciuCombo3);
