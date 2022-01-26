
// function max(list) {
//    let biggest = -Infinity
//    for (let i = 1; i < list.length; i++) {
//        const n = list [i];
//        if (n > biggest) {
//            biggest = n;
//        }
//    }
//    return biggest;
// }

/*
function x(a) {
    duomenu (input) validacija (pasitikrink ar logiska)
    logika (eiks skaiciuok)
    rezultato validacija (patikrink ka suskaiciavai yra logiska)
    rezultato grazinimas (grazink rezultata)
}
*/
function max(list) {
    if (!Array.isArray(list)) {
        return 'ERROR: privalo buti masyvas';
    }
    if (list.length === 0) {
        return 'ERROR: MASYVAS PRIVALO BUTI NE TUSCIAS';
    }
    let biggest = -Infinity;

    for (let i = 0; i < list.length; i++) {
        const n = list [i];
        if (typeof n === 'number'
        && isFinite(n)
        && n > biggest) {
            biggest = n;
        }
    }
    if (biggest === -Infinity) {
        return 'ERROR: masyve nerasta nei vieno normalaus skaiciaus.';
    }
    return biggest;
}
console.log(max ('pomidoras'), '-->', 'ERROR');
console.log(max ([]), '-->', 'EERROR');
console.log(max (Infinity), '-->', 'ERROR');
console.log(max (NaN), '-->', 'EERROR');
console.log(max ({}), '-->', 'ERROR');
console.log(max ((null)), '-->', 'ERROR');
console.log(max (undefined), '-->', 'ERROR');
console.log(max ([-Infinity, -Infinity, -Infinity]), '-->','ERROR');

console.log(max ([1]), '-->', 1);
console.log(max ([1, 2, 3]), '-->', 3);
console.log(max ([-5, 78, 14, 0, 18]), '-->', 78);
console.log(max ([69, 69, 69, 69, 66]), '-->', 69);
console.log(max ([-1, -2, -3, -5, -6, -7, -8]), '-->', -1);
console.log(max ([1, true, 'labas', [], [5], [5, 8], [''], ['a'], 1, 2]), '-->', 2);
console.log(max ([1, NaN, 8, 1, 2]), '-->', 8);
console.log(max ([-1, NaN, -8, -1, -2]), '-->', -1);
console.log(max ([1, Infinity, -Infinity, 8, 1, 2]), '-->', 8);
console.log(max ([1, NaN, Infinity, -Infinity, 8, 1, 2]), '-->', 8);
console.log(max ([1, Infinity, -Infinity, 8, 1, 2]), '-->', 8);
console.log(max ([8, Infinity]), '-->', 8);
console.log(max ([Infinity, 8]), '-->', 8);
