//////////////1.array destruturing ////////////

const numbers = [20, 30];
// const x = numbers[0];
// const y = numbers[1];


// const [x, y] = [20, 30]

const [x, y] = numbers
// console.log(x, y);

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}
// console.log(boxify(90, 60));
const [first, second] = boxify(30, 40);
// console.log(first, second);

const person = {
    name: 'Shakib Khan',
    age: 35,
    bod: "20/2/1985",
    movie: ['king', 'mastan']
}
const [firstMovie, secondMovie] = person.movie;
// console.log(firstMovie, secondMovie);


//////////object destructring/////////

const { name, sallary } = { name: 'alu', age: 20, sallary: 5000 };
// console.log(name, sallary);

const emplyee = {
    id: 'vs code',
    designation: 'developer',
    machine: 'mac',
    lang: ['html', 'css', 'js'],
    specification: {
        heigth: 6,
        weigth: 67,
        adress: 'mirpur',
        watch: {
            color: 'black',
            price: 500,
            brand: 'gramin'
        }
    }
}
const { id, machine } = emplyee;
// console.log(id, machine);

const { adress, heigth } = emplyee.specification;
// console.log(adress, heigth);

const [p, q, r] = emplyee.lang;
console.log(p, q, r);