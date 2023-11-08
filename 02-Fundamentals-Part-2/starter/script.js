'use strict';
/* it gives more info on the bugs,
like it mention reserve the keywords and 
mention undefined words.*/

// 33-onwards
// Function Declaration. We can access before it's declaration.
logger() //valid
function logger(){
    console.log('My name is DD');
}
logger()

//function declared without name are called anonymous function.
// Function Expression. We can not access before it's declaration.
const age =  function (birthYear) {
    return 2023-birthYear;
};
console.log(age(1995));

//Arrow function. These declaration don't have this keywords.
const age2 = birthYear => 2023 - birthYear;

const yearsUntilRetirement = (birthYear, firstName) =>{
    const age = 2023 -  birthYear;
    const retirement = 60 - age;
    
    return `${firstName} retires in ${retirement} years.`
}

// Array declaration.
const arr =[1,2,3];
const years = new Array(1,2,3,'DD');
arr.length;

const newLength = arr.push(4);
arr.unshift('first');

arr.pop();
arr.shift();

arr.indexOf(1);//non-existing it returns -1.
arr.includes();

//Objects
const Jonas = {
    firstNam: 'Jonas',
    lastName: 'Tiwari',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Anuhar1','Anuhar2'],
    driversLicense: true,
    age: function (this) {
        this.personsAge = 2023 - this.birthYear
        return this.personsAge;
    }
}
