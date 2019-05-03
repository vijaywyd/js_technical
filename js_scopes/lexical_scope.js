//Lexical scope means compile time scope. Scope decisions were made during compilation

var bar = "bar";

function foo(str) {
  eval(str);
  console.log(bar); //42
}

foo("var bar = 42");

//Usually scope is determined at compile time and JS compiler makes certain assumptions optimizes variable look-ups
//With eval, it assumes that looks ups cannot be optimisd because at run-time those assumptions may be invalidated.

setTimeout('var  doSomething =42;console.log(doSomething);', 1000); //Kind of eval dont usen string over function in setTimeout


/*with is lexically scoped . When we see a reference to d, scope of with is searched, if not next outer level
until one is created in global level
creates a whole new lexical scope
*/

var obj = {
  a: 1,
  b: 2,
  c: 3
};

with(obj) {
  a = b+c;
  b = c +4;
  d = 3;
}

console.log(d); // 3
console.log(obj.d); // undefined
