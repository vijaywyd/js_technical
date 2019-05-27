
function fun(name) {
  this.name = name;

  this.introduce = function() {
    return ("I am " + this.name);
  }
  return "Hello";
}

/*
All functions are objects in Javascript and properties can be assigned to it
*/

fun.y = "y";
console.log(fun.y); // y

/*
When a function is called with new operator it will return another object with attributes defined on this as its properties
Every object created using constructor function will have its own copies of properties.
It doesn't make sense to create separate instances of property methods that does the same action . - Wastage of memory
*/

var x = new fun("Vijay");
console.log(x); //  Object :   {name: "Vijay" }
console.log(x.name) // Vijay
console.log(fun()); //Hello

//Objects get bound as this keyword for function call
console.log(x.introduce());
