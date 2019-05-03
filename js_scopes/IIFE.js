var foo = "foo";

//By wrapping in paranthesis , it's now a function expression and not function declaration
//Prevents leaking of name, does not pollute existing scope

(
  function x(){
    var foo = "foo2"; // foo2
    var foo1 = "hi";
    console.log(foo);
  }
)();
console.log(foo); //foo
console.log(foo1); // Error: foo1 is not defined

//1. Doesn't take up name in global namespace and prevents name collisions
//2. Prevents accidental invokation from outside; ie protects function scope


const uniqueId = (function() {
  let count = 0;
  return function() {
    ++count;
    return `id_${count}`;
  };
})();

console.log(uniqueId()); // "id_1"
console.log(uniqueId()); // "id_2"
console.log(uniqueId()); // "id_3"
//count variable is inaccessible from outside of the IIFE


//The revealing module pattern relies heavily on this mechanism


const counter = (function() {
  let counterValue = 0;

  return {
    increment() {
      ++counterValue;
    },

    get value() {
      return counterValue;
    }
  };
})();

counter.increment();
console.log(counter.value); // 1

counter.increment();
counter.increment();
console.log(counter.value); // 3
