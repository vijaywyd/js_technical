//Function declaration : function keyword in the begining of the statement
//Function is declared in the current existig (enclosing) scope
function foo () {
  return "Bar";
}

//Named function expression; Name of the function expression enclosed in ITS OWN SCOPE
var foo = function bar() {
  var foo = "baz";

  function baz(foo) {
    foo = bar; // Legal ; function expression bar enclosed in its own scope, and can be accessed in side it
  }
}

bar() ; //Error, function expression don't have enclosing scope; so cannot be accessed outside it


//Anonymous function expression
const  x = () => "Hi";

const obj = {
  x: function() {
    return "Hi";
  }
}
//Limitations:

//1.Anonymous functions cannot be referred from inside ( recursion cannot be implemented )
/*2. While debugging, anonymous function stack trace will not be informative ( especially in minified version), but if its a name,
that name gets used in the debug stack traces*/
//3. Names funtion expressions are self-expressive
