var foo;

try{
  foo.length;
} catch(error) {
  console.log(error);
}

console.log(error); //Error, catch is block scoped hence error variable cannot be accessed here
