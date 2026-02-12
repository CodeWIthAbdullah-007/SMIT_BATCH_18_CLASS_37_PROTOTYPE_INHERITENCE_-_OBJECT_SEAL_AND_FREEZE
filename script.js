// PROTOTYPE INHERITANCE

// =========================================================================================

// Object.prototype.sum = function(a, b) {
    // return a + b;
// };
// console.log(Object.prototype);
// let result =  Object.prototype.sum(12, 12)
// console.log('result', result);

//  CONSTROCTOR FUNCTION

// =========================================================================================

// function Plan(name, price, space, transfer, pages, discountMonths) {
//     this.name = name;
//     this.price = price;
//     this.space = space;
//     this.transfer = transfer;
//     this.pages = pages;
//     this.discountMonths = discountMonths;
//     this.calcAnnual = function(percentIfDicsount) {
//     let bestPrice = this.price;
//     let currentDate = new Date();
//     let currentMonth = currentDate.getMonth();
//     for(let i = 0; i < this.discountMonths.length; i++){
//         if(this.discountMonths[i] === currentMonth){
//             bestPrice = this.price * percentIfDicsount;
//             // console.log(this.discountMonths[i]);
//         };
//     };
//     return bestPrice * 12
//     };
// };
// let plan1 = new Plan('Basic', 3.99, 100, 1000, 10, [6, 7]);
// console.log('plan1', plan1);
// console.log(plan1.calcAnnual(0.10));

// HASOWNPROPERTY

// =========================================================================================

let obj = {
    name : 'Abdullah',
    rollNum : 123,
};
// let hasProp = obj.hasOwnProperty('name');
// console.log('hasProp', hasProp);
obj.city = 'karachi';
console.log('obj', obj);

