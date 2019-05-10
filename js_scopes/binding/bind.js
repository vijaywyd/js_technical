function bind(fun, object) {
	return function() {
    	fun.call(object);
    }
}

function foo() {
	console.log(this.bar);
}

foo = bind(foo, obj);

var obj = { bar: "bar", foo: foo};
