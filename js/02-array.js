// Array - masyvas, sarasas, listas, matrica

console.log('----------------');

const maistoSarasas = ['pomidoras', 'agurkas', 'bulve', 'svogunas'];
console.log(maistoSarasas);

console.log('Reikia nupirkti:', maistoSarasas[0]);
console.log('Reikia nupirkti:', maistoSarasas[1]);
console.log('Reikia nupirkti:', maistoSarasas[2]);
console.log('Reikia nupirkti:', maistoSarasas[3]);

console.log('-----------');

const asmuo1 = 'Petras';
const asmuo2 = 'Ona';
const asmuo3 = 'Jonas';
const asmuo4 = 'Maryte';

const asmenys = [asmuo1, asmuo2, asmuo3, asmuo4];
console.log(asmenys);

console.log('-----------');

const pazymiai = [10, 2, 8, 6, 4];
console.log(pazymiai);
// Pazymiai: 10, 2, 8, 6, 4.
console.log(`Pazymiai: ${pazymiai[0]}, ${pazymiai[1]}, ${pazymiai[2]}, ${pazymiai[3]}, ${pazymiai[4]}.`);

console.log('-----------');

// Pazymiu suma: 30.

const pazymiuSuma = pazymiai[0] + pazymiai[1] + pazymiai[2] + pazymiai[3] + pazymiai[4];
console.log(`Pazymiu suma: ${pazymiuSuma}.`);

console.log('-----------');

// Pazymiu kiekis: 5.

console.log(`Pazymiu kiekis: ${pazymiai.length}.`);

console.log('-----------');

// Pazymiu vidurkis: 6.

console.log(`Pazymiu vidurkis: ${pazymiuSuma / pazymiai.length}.`);

console.log('-----------');

// Klaseje mokosi 4 asmenys
console.log(`Klaseje mokosi ${asmenys.length} asmenys`);

console.log('-----------');

// Mokiniu vardai yra Petras, Ona Jona, Maryte.
console.log(`Mokiniu vardai yra: ${asmenys[0]}, ${asmenys[1]}, ${asmenys[2]}, ${asmenys[3]}.`);