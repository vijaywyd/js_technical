/*
Function that accepts another function as an argument.
Function accepted as argument is referred to as callback
ie HOF has a callback function as parameter

*/

const double = (x) => x*2;

let x = [1, 2, 3];
let y = x.map(ele => ele * 2); // map is a higher order function 
