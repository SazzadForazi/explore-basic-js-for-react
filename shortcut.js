//'almas',5,true,{},[]
//'',0,flase, null,undefind

//check truthy 
let myVer = 5;
if (myVer) {
    myVer = myVer + 15;
    // console.log(myVer);
}
else {
    myVer = 0;
    // console.log(myVer);

}

//chrack nrgative or falsy anything
let mymoney = 50;
if (!mymoney) {
    mymoney = mymoney * 10;
    // console.log(mymoney);
}
else {
    mymoney = 100000;
    // console.log(mymoney);
}

//////////////////// ternary /////////////////
const money = 80;
let food = money > 100 ? 'birani' : 'cha biscuit';
// console.log(food);
let drink = (money > 100 && myVer > 100) ? 'coke' : 'filter water';
// console.log(drink);

////////////////  number to string convert  ////////
const num1 = 565;
// console.log(num1);
const numString = num1 + '';
// console.log(numString);


////////////string to number ////////////////
const input = '500';
// console.log(+input);





let isActive = false;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');
// isActive ? showUser() : hideUser();
//use  && if the left side is false then right side will be executed
isActive && showUser();

//use || if the left side is false then right side will be executed
isActive || hideUser();

//toggle boolean
isActive = !isActive;