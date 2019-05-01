
/*
-> Returning previously calculated value without recalculating them when same set of input is received again
ie Caching the result
-> Index must be stringified or multi-dimensional for function with multiple arguments
-> Performance improvement
*/

//Function which calculates sum of two varables
const summation = (a, b) => a+b;
const getIndex = (functionToBeMemonized, args) => [].concat(functionToBeMemonized.name, args).join("|"); //eg sum(10, 20) = sum|10|20

const memonize = (functionToBeMemonized) => {

  const cache = {};
  return function(...args) {

    const index = getIndex(functionToBeMemonized, args);
    return cache.index ||  (cache.index = functionToBeMemonized(...args))
  }
}

const optimizedSumation = memonize(summation);
optimizedSumation(10, 20);
