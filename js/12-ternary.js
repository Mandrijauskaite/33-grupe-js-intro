/*
ternary operator:
question ? yes : no;
*/

const isMarried = false;

// Vardenis is (not) married.
let isNot = '';
if (!isMarried) {
    isNot = ' not';
}
console.log(`Vardenis is (not) married.`);

console.log(`Vardenis is ${isMarried ? '': ' not'} married.`);

const n = 7;
// Skaicius 7 yra (ne)lyginis.
let lyginis = '';
if (n % 2 !== 0) {
    lyginis = 'ne';
}
console.log(`Skaicius ${n} yra ${lyginis}lyginis`);