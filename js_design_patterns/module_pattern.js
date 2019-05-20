/*

1. There must be an outer wrapping function (may be an IFFE ) that must be executed
2. One or more functions must be returned from that function call; Closure over the private scope
3. Data hiding and encapsulation; Principal of least exposure
*/


var foo = (function(){
  var o = {bar: "bar"}

  return {
    getBar: function() {
      return o.bar
    }
  }
}());

console.log(foo.getBar()); //bar



var foo = (function(){
  var o = {bar: "bar"}

  var publicApi =  {
    getBar: function() {
      return o.bar
    }
  }

  return publicApi;
}());

console.log(foo.getBar()); //bar
