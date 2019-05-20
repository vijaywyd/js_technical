/*
Function call becomes constructor call

A new object will be created
Objects get linked to a different object
Object gets bound as this keyword for function call
Function returns new object with all this references as its properties
*/


function foo() {
  this.bar = "bar";
  let x =10;

  this.calc = function() {
    return this.z;
  }

  return 5;
}

var bar = "bars";
var baz = new foo();
console.log(baz.bar); //bar
console.log(baz.x); //undefined
baz.z = "z";
console.log(baz.calc());
