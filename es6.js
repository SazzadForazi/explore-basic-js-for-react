//////////////////////////////////// 1.Template string ////////////////////////////////
let array = [10, 20, 30, 40];
const person = {
    name: 'Shakib Khan',
    age: 35,
    bod: "20/2/1985",
    movie: ['king', 'mastan']
}
// console.log(`Hello ${person.name}. His Birth of date ${person.bod} has number ${array[2]} also likes movie ${person.movie[1]}`);



//////////////////////////////////2. Arrow function ///////////////////////////////////

/*  ALADA KORE RETURN KORA LAGR  NA

const getFiftyFive = () => 55;
console.log(getFiftyFive());
const getSixtyFive = num => num + 56;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
*/

/*   ALADA KORE RETURN KORA LAGE

const doMath = (num1, num2) => {
    sum = num1 + num2;
    return sum;
}
const s = doMath(50, 60);
console.log(s)
*/

////////////////////////////////////////// SPREAD OPERATOR ////////////////////////////////

// console.log(array);
const numbers = [...array];
array.push(99);
array.push(99);
array.push(99);
// console.log(array);
// console.log(numbers);
// console.log(array);


///create a new array from an older array and add an element 

const currentNumber = [...array, 1400];
console.log(numbers);
console.log(array);
console.log(currentNumber);


