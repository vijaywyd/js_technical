/*
Variable Declaraion : Hypothetical concept in which variable declarations are moved to the top of the function.
Variables and funcions are declared during the compile phase
Only declarations are hoisted but not definitions
Functions are hoisted before variables
Useful in case of mutual recursions
*/

function fun() {

  a = 10;
  console.log(a);  // 10
  console.log(b); //undefined
  console.log(c); //Reference Error

}

fun();



var a = b(); // 10 ; Function declarations are hoisted
var c = d(); // d is not a function error, function expressions are not hoisted

function b() {
  return 10;
}



var d = function() {
  return 20
}

console.log(a);


// ----------------------------------------------------------

/*
Functions are hosted first and only then are variables.
*/
console.log(foo()); // foo

var foo = 2; // Declaration ignored as foo has already been declared; for variables values are left as executable code;
//Only declaration in compilation phase

function foo() {
	return 10;
}

function foo() {  // This overrides previous function declaration;
	return "foo"
}


// ----------------------------------------------------------

console.log(baz);
let baz; // Reference error, no hoisting for let
