/**
1. Global Scope : Variables declared outside the function. All scripts and functions can access it .

*/


/*
  Output is 15 . Even if we declare x 100 times, previous 99 times are ignored
  2 pass compiler : 1st pass all variables are identified and declared . Initialisation happens at a later point of time .
*/

//--------------------------------------------------------------------------------------

var x = 10;
var x =15;

console.log(x);



//--------------------------------------------------------------------------------------

//Within the scope of bar we are declaring foo
function bar(foo) {
	foo ="Hi";
   baz= "Hello";
  console.log(foo); // Hi, Defaults to global scope since locally not found , varible will be searched one level higher and so on
  console.log(baz); // Hello

}

bar();
console.log(baz); // Hello in non-strict mode but an error in strict mode
console.log(foo); // Error: foo is not defined
