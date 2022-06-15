alert('hello,world');
console.log(1);

let age = 25;
let year = 1991;
console.log(age);
age = 'this is my age'; //loosely typed
console.log(age, year);

const points = 100;
console.log(points);
//points = 200 - this is not allowed

var score = 75;
console.log(score); // this is older way
score = 22;
console.log(score);

/*
   number
   string
   boolean
   null
   undefined
   object
   symbol
*/

let trueOrFalse = true;
console.log(typeof trueOrFalse);

let aVar = null;
console.log(typeof aVar);

let bVar;
console.log(typeof bVar);

//symbols?

let email = 'mario@thenetninja.co.uk';
let name1 = 'maruo';
console.log(name1+ ' ' + email);  // concatenation

console.log(email[3]);

console.log(name1.length);

let fullName = email + ' ' + name1;
console.log(fullName.length); //length is a property
 
console.log(fullName.toUpperCase()); //toUpperCase is a method

let result = fullName.toUpperCase(); //original value fullName is not altered
alert(result);
alert(fullName);

let VariableNish = 'nish';
let VariableNish1 = VariableNish.lastIndexOf('s');
console.log(VariableNish1);


let a_new_var = VariableNish.slice(0,2);
console.log(a_new_var);


let radius = 10;
const PI = 3.142;

console.log('area is ' + PI*radius**2);

console.log(2+ 3 * 3 - 4); //BIDMAS

console.log(++radius);