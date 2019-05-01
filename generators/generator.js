/*
Yield pauses the generator function and next resumes the generator function
When we create a generator we don't execute any of its code
*/

function* numbers() {
    yield 1;
    yield 2;
    yield 3;
}

const generator = numbers();
console.log(generator.next());       //Object { value: 1, done: false }
console.log(generator.next());       //Object { value: 2, done: false }
console.log(generator.next());       //Object { value: 3, done: false }
console.log(generator.next());       //Object { value: undefined, done: false }

const generator1 = numbers();
for (const number of generator1) {
  console.log(number);                //1 2 3 4
}
