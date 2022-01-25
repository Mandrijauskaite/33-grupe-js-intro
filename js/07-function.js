console.log('---------');
/*
function - perpanaudojamo kodo blokas
// uzkomentavimas (kai norima, kad programa neraguotu)
function sumavimas (pirmasSkaicius, antrasSkaicius) {
    console.log('is vidaus:', pirmasSkaicius);
    console.log('is vidaus:', antrasSkaicius);
    return 'Labas rytas'
    ------------
    return pirmasSkaicius + antrasSkaicius
}
------------
is vidaus: 5
is vidaus: 7
5 7  =  Labas rytas
------------
5 7  =  12
------------
ziuredami funkcija turime viska pamirsti, kas aplinkui
*/

console.log('------------');

function sumavimas (pirmasSkaicius, antrasSkaicius) {
    console.log('is vidaus:', pirmasSkaicius);
    console.log('is vidaus:', antrasSkaicius);
    return pirmasSkaicius + antrasSkaicius
}

const a = 5;
const b = 7;
const c = 11;
const d = 777;

const r1 = sumavimas (a, b);
const r2 = sumavimas (b, c);
const r3 = sumavimas (c, d);
const r4 = sumavimas (a, d);

console.log(a, b, ' = ', r1);
console.log(b, c, ' = ', r2);
console.log(c, d, ' = ', r3);
console.log(a, d, ' = ', r4);

console.log('------------');

const asmuo1 = 'Petras';
const asmuo2 = 'Maryte';
const asmuo3 = 'Ona';
const asmuo4 = 'Jurgis';

function pasisveikinimas(vardas) {
    return `Sveiki, mano vardas yra ${vardas}!`;
}

const labas1 = pasisveikinimas(asmuo1);
console.log(labas1);

const labas2 = pasisveikinimas(asmuo2);
console.log(labas2);

const labas3 = pasisveikinimas(asmuo3);
console.log(labas3);

const labas4 = pasisveikinimas(asmuo4);
console.log(labas4);

console.log('------------');

const petras = [10, 2, 8, 4];
const maryte = [1, 3, 5, 7, 9];
const ona = [5, 6, 7, 8, 9];
const jurgis = [9, 9, 6];

function vidurkis(pazymiuSarasas) {
    let pazymiuSuma = 0;
    for (let i = 0 ; i < pazymiuSarasas.length; i++) {
        const pazymys = pazymiuSarasas[i];
        pazymiuSuma += pazymys;
        }
    return pazymiuSuma / pazymiuSarasas.length;
}

const petroVidurkis = vidurkis(petras)
console.log('Petras:', petroVidurkis);

const marytesVidurkis = vidurkis(maryte)
console.log('Maryte:', marytesVidurkis);

const onosVidurkis = vidurkis(ona)
console.log('Ona:', onosVidurkis);

const jurgioVidurkis = vidurkis(jurgis)
console.log('Jurgis:', jurgioVidurkis);

console.log('------------');

/*
tuscia funkcija (), neatlieka jokios vidines logikos {}

function tusciaFunkcija() {

}

grazina (return) bulien (logika taip arba ne. naudojami zodziai: true arba false) reiksme false; grazina reiksme false (console.log(tusciaFunkcija());)

function tusciaFunkcija() {
    return false;
}
console.log(tusciaFunkcija())
pvz.:

const g = 5;
const h = 6;

const arLygu = g === h;
console.log(arLygu);

-------------

*/

if (true) {
    console.log('labas');
} 
const g = 5;
const h = 6;

const arLygu = g === h;
console.log(arLygu);

if (false) {
    console.log('labas');
} else {
    console.log('iki');
}

if (g === h) {
    console.log('labas');
} else {
    console.log('iki');
}