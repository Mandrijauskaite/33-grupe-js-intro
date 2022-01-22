/*
IF - sąlygos 

PALYGINIMO OPERATORIAI:
visi: > (daugiau), < (maziau), >= (daugiau arba lygu), <= (maziau arba lygu), == (ar lygu), != (nelygu), === (lygu), !== (grieztai nelygu)
nenaudotinus: ==, !=
naudotinus: >, <, <=, >=, ===, !==
papildomi: && (and), || (or)

ŠABLONAI:
if () {}
if () {} else {}
if () {} else if {} else {}
if () {} else if {} ... else if {}
if () {} else if {} ... else if {} else {}

if (salyga / klausimas) {
    ka daryti, jei tenkinama salyga
} else {
    ka daryti, jei NEtenkinama salyga
}
*/

const a = 5;
const b = 7;

// jeigu, a yra daugiau uz b, tai parasyti - daugiau
// jeigu, a nera daugiau uz b, tai parasyti nera daugiau


if (a > b) {
console.log('daugiau');
} else {
console.log('nera daugiau');  
}

const c = 9;
const d = 9;

if (c === d) {
console.log('lygu');
} else {
    console.log('ne lygu');
}

if (c >= d) {
    console.log('daugiau arba lygu');
} else {
    console.log('nei daugiau, nei lygu -> maziau');
}

console.log('------------');

const e = 9;
const f = 99;

if (e <= f) {
    console.log('dmaziau arba lygu');
} else {
    console.log('nei maziau, nei lygu -> daugiau');
}

const pinigine = 10
// turiu pinigu
// neturiu pinigu
// esu skolingas

if ( pinigine > 0) {
    console.log('turiu pinigu');
} else if (pinigine === 0) {
    console.log('neturiu pinigu');
} else {
    console.log('esu skoloje');
}

const akys = 'zalios';

if (akys === 'zalios') {
    console.log('Geras zmogus');
} else if (akys === 'melynos') {
    console.log('Gabus zmogus');
} 
else {
    console.log('Zmogus su nezinomos spalvos akimis');
}

console.log('------------');

const diena = 25;

if (diena === 1) {
    console.log('pirmadienis');
} else {
    if (diena === 2) {
        console.log('antradienis');
    } else {
        if (diena === 3) {
            console.log('antradienis');
        } else {
            if (diena === 4) {
                console.log('antradienis');
            } else {
                if (diena === 5) {
                    console.log('antradienis');
                } else {
                    if (diena === 6) {
                        console.log('antradienis');
                    } else {
                        if (diena === 7) {
                            console.log('antradienis');
                        } 
                         console.log('tokia diena neegzistuoja');
                    }
                }
            }
        }
    }
}

console.log('------------');

if (5 !== 5) {
    console.log('nelygu');
} else {
    console.log('lygu');
}

console.log('------------');

 
const didelis = 8;
const dydis = 5;
const prinokimas = 'prinokes';

// mazas raudonas pomidoras
// didelis raudonas pomidoras
// mazas  neprinokes pomidoras
// didelis neprinokes pomidoras
console.log('------------');

if (dydis >= didelis && prinokimas === 'prinokes') {
    console.log('didelis prinokes pomidoras');

} else if (dydis < didelis && prinokimas === 'prinokes') {
    console.log('mazas prinokes pomidoras');

} else if (dydis >= didelis && prinokimas !== 'prinokes') {
    console.log('didelis neprinokes pomidoras');

} else {
    console.log('mazas neprinokes pomidoras');
}

console.log('------------');

if (dydis>= didelis && prinokimas === 'prinokes') {
    console.log('didelis prinokes pomidoras');
} else if (dydis <= didelis && prinokimas === 'prinokes') {
    console.log('mazas prinokes pomidoras');
}

console.log('------------');

if (dydis >= didelis) {
    if (prinokimas === 'prinokes') {
        console.log('didelis prinokes pomidoras');
    } else {
        console.log('didelis neprinokes pomidoras');
    }
} else {
    if (prinokimas === 'prinokes') {
        console.log('mazas prinokes pomidoras');
    } else {
    console.log('mazas neprinokes pomidoras');
    }
}

console.log('------------');

const day = 5
if (day === 1 || day === 2 || day ===3 || day === 4|| day === 5) {
    console.log('darbo diena');
} else if (day === 6 || day === 7) {
    console.log('savaitgalis');
} else {
console.log('tokia savaites darbo diena neegzistuoja');
}