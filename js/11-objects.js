/*
duomenu tipai:
PRIMITYVUS:
-number
-string
-boolen
-null
-undefined
-function

KOMPLEKSINIAI:
-array (object)
-object
*/

/*
-vardas
-pavarde
-dob
   -y
   -m
   -d
-vaiku sarasa
    -vardas
    -pavarde
    -dob
        -y
        -m
        -d
        .........
*/
// Tasko koordinates yra [x, y, z].
const point = {
    x: 2,
    y: -5,
    z: 0,

}
console.log(`Tasko koordinates yra [${point.x}, ${point.y}, ${point.z}]`);
// console.log(`Tasko koordinates yra [${point['x']}, ${point['y']}, ${point['z']}]`);

// console.log(point);
// console.log(point['x']);
// console.log(point['y']);
// console.log(point['z']);

const person = {
    name: 'Vardenis',
    surname: 'Pavardenis',
    dob: {
        year: 2022,
        month: 1,
        day: 25,
    },
    favoriteColors: ['red', 'blue', 'yellow'],
    isMarried: false,
    children: [0]
};

// Name Surname is (not) married. 
let isNot = 'is';
if (!person.isMarried) {
    isNot += ' not';
}
console.log(`${person.name} ${person.surname} ${isNot} married`);

// Person has N children. 
console.log(`Person has ${person.children.length} children.`);

// Favorite colors is color, color, color. 
let colors = '';
if (person.favoriteColors.length) {
    colors = person.favoriteColors[0];
    for (let i = 1; i < person.favoriteColors.length; i++) {
       const color = person.favoriteColors[i];
       colors += ', ' + color;     
    }
}
const shortColors = colors.slice(0, -2);

console.log(`Favorite colors is ${shortColors}.`);

// DOB: yyyy-mm-dd.`
console.log(`DOB: ${person.dob.year}-${person.dob.month}-${person.dob.day}.`);

