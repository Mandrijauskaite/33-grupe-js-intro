/*
FOR - ciklas, kazko kartojimasis
Let (tarkime) i (menesio indeksas)
for (let i = 0; pagrindinis iteratorius-nuo ko pradeti i <= 5; sąlyga-kur eiti finisas  i = i + 1 kaip jis kinta-kokiu zingsniu eiti) {
    console.log(i, 'wergth');
}
*/

console.log('---------');

const months = ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Geguze', 'Birzelis', 'Liepa', 'Rugpjutis'];

// Metu menesiai:
// 1. Sausis
// 2. Vasaris
// ...
// 12. Gruodis

console.log('Metu menesiai');
console.log(1 + '. ' + months[0]);
console.log(2 + '. ' + months[1]);
console.log(3 + '. ' + months[2]);
console.log(4 + '. ' + months[3]);
console.log(5 + '. ' + months[4]);

console.log('---------');

let i = 0
console.log('Metu menesiai');
console.log((i + 1) + '. ' + months[i]);
i = i + 1

console.log((i + 1) + '. ' + months[i]);
i = i + 1

console.log((i + 1) + '. ' + months[i]);
console.log((i + 1) + '. ' + months[i]);
console.log((i + 1) + '. ' + months[i]);

console.log('---------');

for (let i = 0; i < months.length; i++) {
    console.log((i + 1), '. ' + months[i]);
    
}

console.log('---------');

const y = 1
let x = 5;
console.log(x);

x = x + y;
console.log(x);

console.log('---------');

x =+ y;
console.log(x);

x++;
console.log(x);


console.log('---------');

const nuo1 = 0;
const iki1 = 4;
let suma1 = 0;

for (let i=nuo1; i < iki1; i++) {
    suma1 = suma1 + i;
    console.log(i);
}

console.log(`Nuo ${nuo1} iki ${iki1} skaciu suma yra ${suma1}.`);

console.log('---------');

const nuo3 = -70;
const iki3 = 30;
let suma3 = 0;

for (let i=nuo3; i < iki3; i++) {
    suma3 = suma3 + i;
}

console.log(`Nuo ${nuo3} iki ${iki3} skaciu suma yra ${suma3}.`);

console.log('---------');

/*
Panaudojant cikl1 perra6yti tekstinio tipo kintam7j7 reik6mes i6 kito galo.
*/

const text = 'abcdef';
let reverseText = '';

for (let i = 0; i < text.length; i++) {
    const symbol = text[text.length - 1 - i];
    console.log(symbol);
    reverseText = reverseText + symbol;
}

console.log(`${text} --> ${reverseText}`);

console.log('---------');

const text2 = 'albertas';
let reverseText2 = '';

for (let i = 0; i < text2.length; i++) {
    const symbol = text2[i];
     reverseText2 = reverseText2 + symbol;
}

console.log(`${text2} --> ${reverseText2}`);

console.log('---------');

const text3 = 'alus';
let reverseText3 = '';

for (let i = text3.length - 1; i >= 0; i--) {
    const symbol = text3[i];
    reverseText3 += symbol;
 }

console.log(`${text3} --> ${reverseText3}`);