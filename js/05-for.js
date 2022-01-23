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

