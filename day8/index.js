console.log("hi there......")
//let,const,var used to create variables
//string,number,boolean,undefined,null,symbol,bigint are data types in js
let name = "John"; // using let to declare a data type string

console.log(name);

console.log(typeof name); // to check the data type of the variable

let bool = true
console.log(typeof bool)
 
//concatenation
let lastname ="sarma"

console.log(name + " " + lastname) //concatenation of two strings

//comparison operators=> equal to(==/===), not equal to(!=/!==), greater than(>), less than(<), greater than or equal to(>=), less than or equal to(<=)
//use === and !== for comparison as they check both value and type
let a = 10;
let b = 20;
console.log(a == b) // false
console.log(a != b) // true
console.log(a > b) // false
console.log(a < b) // true
console.log(a >= b) // false
console.log(a <= b) // true

if(a<b){
    console.log("a is less than b")
}else{
    console.log("a is greater than b")
}






