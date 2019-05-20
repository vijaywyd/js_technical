/*
Capability of a function to remember its lexical scope even ehen its executed outside its lexical scope
Created by returning an inner function from outer function
*/

function foo() {
  var bar = "bar";

  return function() {
    console.log(bar);
  }

}

foo()();




function foo() {
  var bar = "bar";

  setTimeout(function() {  //Closure eg, setTimeout excutes this function as a callback outside of its current lexical scope
      console.log(bar);
  }, 1000);

  bar = "bar1";
}

foo();

onClick = {handleClick} // Callback functions for event handlers
