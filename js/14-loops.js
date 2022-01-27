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

// WHILE (maziau efektyvus nei FOR)
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

//DO-WHILE (panasu i WHILE ideja pirma duoda i snuki po to klausia)
console.log('DO-WHILE: --------------');
let idw = 0;
do {
    const item = list[idw];
        console.log(item);
        idw++
} while (idw < list.length);

//MAP 
console.log('MAP: --------------');
const mapMarks = [10, 2, 8, 4, 6];
const doubleMapMarks = mapMarks.map(n => n * 2);

console.log(mapMarks);
console.log(doubleMapMarks);


const listFirstLetters = list.map(item => item[0]);
const listLengths = list.map(item => item.length);

console.log(list);
console.log(listFirstLetters);
console.log(listLengths);

const nums = [21487, 45852, 84562, 859624];
const numsFirstNum = nums.map(n => +('' + n)[0]);
console.log(numsFirstNum);

// FILTER
console.log('FILTER: --------------');
const filterMarks = [10, 2, 8, 4, 6];
const goodMarks = filterMarks.filter(n => n >= 7);

console.log(filterMarks);
console.log(goodMarks);


// MAP + FILTER
console.log('MAP + FILTER: --------------');
const names = ['Jonas', 'Ona', 'Rasa', 'Petras', 'Maryte'];
// pasilikti tik vardu pirmas raides, kur vardu ilgis maziau 6 simb.
const modifiedNames = names
.filter(name => name.length < 6)
.map(name => name[0]);
console.log(modifiedNames);

const modifiedNames2 = names
.map(name => name[name.length - 1])
.filter(name => name.length < 6);
console.log(modifiedNames2);

// SORT
// REDUCE
// FOR-EACH
