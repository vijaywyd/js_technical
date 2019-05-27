/*
When a function is created in Javascript, JS engine adds a prototype property to the function.
The prototype is an object which has a constructor property by default
When an object is created using the construcor function, te object has a __proto__ (dunder proto) property pointing to the
prototype object of the constructor function


                                             |-----> constructor -->
 -----------      |--------->  prototype ----|                        |
|           |     |                                                   |
|   fun ----|-----                                                    |
|           | <-------------------------------------------------------|
 -----------

*/

function Human(firstName, lastName) {
	this.firstName = firstName,
	this.lastName = lastName,
	this.fullName = function() {
		return this.firstName + " " + this.lastName;
	}
}

var person1 = new Human("Vijay", "P R");

console.log(person1); // Human {firstName: "Vijay", lastName: "P R", fullName: ƒ}
console.log(Human.prototype) // {constructor: ƒ}
console.log(person1.__proto__); // {constructor: ƒ}

var person2 = new Human("Abc", "def");

Human.prototype === person2.__proto__ //true
person1.__proto__ === person2.__proto__ //true




var y = {a: 'a'};
//__proto__ returns the internal prototype linkage of a1
console.log(y.__proto__); //{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
