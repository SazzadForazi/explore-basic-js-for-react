const product = [
    { name: 'laptop', price: 3200, brand: 'lanovo', color: 'silver' },
    { name: 'mobile', price: 300, brand: 'lanovo', color: 'res' },
    { name: 'laptop', price: 3500, brand: 'walton', color: 'green' },
    { name: 'freez', price: 200, brand: 'samsung', color: 'silver' },
]

////////////////////////1. map ////////////////////////////////
const brands = product.map(item => item.name);
// console.log(brands);

///////////////////////2. forEach /////////////////////////////

//single 

// product.forEach(item => console.log(item));
// product.forEach(item => console.log(item.color));

//multiple

product.forEach(item => {

})


////////////////////////////////3. filter //////////////////////////

const cheap = product.filter(item => item.price <= 2000);
// console.log(cheap);
const specificName = product.filter(item => item.name.includes('e'));
// console.log(specificName);



//////////////////////////////////4.FIND ////////////////////////////
const count = product.find(item => item.price <= 2000);
// console.log(count);

const specificWord = product.find(item => item.name.includes('l'));
console.log(specificWord);