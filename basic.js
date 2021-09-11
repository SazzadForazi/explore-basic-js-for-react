/////////////////////////////////////////////////1. let/Constent ////////////////////////////////////////////////////////////
const fatherName = 'Shajahan Ali';
let season = 'rainy';
season = 'winter';

/////////////////////////////////////////////////2. condition ////////////////////////////////////////////////////////////
// 6 basic conditon:>,<,===,!==,<=,>=
//multiple condition:&&,||



/////////////////////////////////////////////////3. array ////////////////////////////////////////////////////////////

let array = [10, 20, 30, 40];
// console.log(array.indexOf(30));
array[2] = 56;
// console.log(array);
array.push("xyz");
array.pop();
array.unshift(41, 87)
array.shift()
// console.log(array.length);

/////////////////////////////////////////////////4. function////////////////////////////////////////////////////////////

for (let i = 0; i < array.length; i++) {
    const number = array[i];
    // console.log(number);

}
/////////////////////////////////////////////////5. function////////////////////////////////////////////////////////////

function multiple(a, b) {
    const c = a * b;
    return c;
}
const mul = multiple(5, 5);
// console.log(mul);

function addition(x, y) {
    const add = x + y;
    // console.log(add);

}
addition(5, 5);

/////////////////////////////////////////////////6. object ////////////////////////////////////////////////////////////

const person = {
    name: 'Shakib Khan',
    age: 35,
    bod: "20/2/1985"
}

const myVariable = 'age';
// console.log(person);

//3 ways to acces property
// console.log(person.age);                   //direct by property
// console.log(person['age']);               //access via property name string
// console.log(person[myVariable]);         //acces via property name in a variable
