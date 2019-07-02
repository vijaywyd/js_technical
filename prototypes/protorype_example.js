function Foo(who) {
  this.me = who;
}

Foo.prototype.identify = function() {
  console.log("I am " + this.me);
}

var a1 = new  Foo("a1");
var a2 = new Foo("a2");

a1.identify(); //  "I am a1"
a2.identify();  // "I am a2"

var a3 = new Foo("a3");

a3.identify = function() {
  console.log("In a3");
  Foo.prototype.identify();  // I am undefined
  Foo.prototype.identify.call(this);  // I am a3
}

a3.identify();
