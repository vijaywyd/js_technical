/*
Every function while executing has a reference to the current execution context which is called this
Call-sight: Placing code where function gets executed

*/


function foo() {
  console.log(this.bar);
}

var bar = "bar";

var o1 = {bar: "bar1", foo: foo};
var o2 = {bar: "bar2", foo: foo};

foo(); // undefined in strict and bar in non-strict     => Default binding
o1.foo(); //bar1    => Implicit Binding
o2.foo(); //bar2

foo.call(obj)   //.call or .apply at call sight,  use obj as my this . Explicitly specifying the context


/*
Default binding : this refers to the global context; Normal function calll no dot notation to invoke a function
defaulted to window in non-strict mode and undefiend in strict mode of the code running inside foo

Implicit binding : Reference to the function via object property. Dot notation to invoke a function


*/
