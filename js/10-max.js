
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

function max(list) {
    if (typeof list !== 'object') {
        return 'ERROR: privalo buti masyvas';
    }
    if (list.length === 0) {
        return 'ERROR: MASYVAS PRIVALO BUTI NE TUSCIAS';
    }
    let biggest = list[0];

    for (let i = 1; i < list.length; i++) {
        const n = list [i];
        if (n > biggest) {
            biggest = n;
        }
    }
    return biggest;
}

console.log(max ([1]), '-->', 1);
console.log(max ([1, 2, 3]), '-->', 3);
console.log(max ([-5, 78, 14, 0, 18]), '-->', 78);
console.log(max ([69, 69, 69, 69, 66]), '-->', 69);
console.log(max ([-1, -2, -3, -5, -6, -7, -8]), '-->', -1);
console.log(max ('pomidoras'), '-->', 'Pateikta netinkamo tipo reiksme');
console.log(max ([]), '-->', 'Pateiktas sarasa negali buti tuscias');