/////////////1. json=>stringify,parse /////////
const person = {
    name: 'Shakib Khan',
    age: 35,
    bod: "20/2/1985",
    movie: ['king', 'mastan']
}

const personJson = JSON.stringify(person);
// console.log(person);
// console.log(personJson);


const personObj = JSON.parse(personJson);
// console.log(personObj);


///////////////2. fetch  /////////////////

// fetch('url')
//     .then(res => res.json())
//     .then(data => console.log(data));


///////////// keys,values /////////////

const keys = Object.keys(person);
const values = Object.values(person)
// console.log(keys);
// console.log(values);


///////////forEach///////
const number = [20, 30, 24, 15, 85];
// number.forEach(item => console.log(item));
const num = number.map(item => item * 2);
console.log(num);

// note:
//for of on array like object
//loop on an object using for in


///////////////////// add or remove from an array ////////////////// 
const product = [
    { name: 'laptop', price: 3200, brand: 'lanovo', color: 'silver' },
    { name: 'mobile', price: 300, brand: 'HTC', color: 'res' },
    { name: 'laptop', price: 3500, brand: 'walton', color: 'green' },
    { name: 'freez', price: 200, brand: 'samsung', color: 'silver' },
];
const newProduct = { name: 'webcsm', price: 800, brand: 'lal' }
//copy products array and then add newProducts
const newProducts = [...product, newProduct];
console.log(newProducts);


///create a new array without one spacific
///remove phone means create a new array without the array
const remaining = product.filter(item => item.name !== 'mobile');
console.log(remaining);