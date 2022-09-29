const myModule = require('./myModule')

const stringModule = require('./stringModule')

console.log( myModule.multiply(2, 3) );
console.log( myModule.sum(5,5) );

console.log(stringModule());


// Days of the Week

let daysOfWeek = require('./daysOfTheWeek.js');

let day = daysOfWeek.getWeekday(3);
console.log(day);
console.log(daysOfWeek.weekdays);
