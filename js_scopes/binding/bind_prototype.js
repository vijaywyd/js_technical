if(!Function.prototype.bind2) {
  Function.prototype.bind2 = function (o) {
    let fn = this;

    return function() {
      return fn.apply(o, arguments);
    }
  }
}


function foo(baz) {
  console.log(this.bar + " " + baz)
}


var obj = {bar: "bar"};
var obj1 = {bar: "bar1"};

foo = foo.bind2(obj);   // bar baz"
foo("baz");
