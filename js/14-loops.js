console.log('------');
/*
const list = ['Agurkas', 'Zirnis'] - saraso reiksmes
console.log(list) - isspausdinti visas saraso reiksmes
*/
// FOR 
const list = ['Agurkas', 'Zirnis', 'Salota', 'Ridikelis', 'Pmidoras'];
console.log(list);

console.log('FOR: --------------');
for (let i=0; i<list.length; i++) {
    const item = list[i];
    console.log(item);
}

//WHILE (maziau efektyvus nei FOR)
console.log('WHILE: --------------');
let iw = 0;
while (iw < list.length) {
   const item = list[iw];
   console.log(item);
   iw++;
}

const imax = 5;
let ir = 0;
let rn = 0;
while (rn < 0.9 && ir <imax) {
    rn = Math.random();
    console.log(`${ir} ${rn}`);
    ir++;
}

//D-WHILE (panasu i WHILE ideja pirma duoda i snuki po to klausia)
console.log('DO-WHILE: --------------');
let idw = 0;
do {
    const item = list[idw];
        console.log(item);
        idw++
} while (idw < list.length);