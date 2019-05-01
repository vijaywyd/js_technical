function* getAllPosts() {
  //You can catch errors individually or as a bulk using try catch
  const response = yield fetch("https://jsonplaceholder.typicode1.com/posts")
  const posts    = yield response.json()  //yielded values need not be a promise, it can be anything
  console.log(posts);
}

asyncExecutor(getAllPosts()) // getAllPosts is a generator




// ----- This code  could be put in some library / module and no re-write is required -------

function asyncExecutor(generator) {
    function doNextAsync(resume) {

      const resolve = (response) => generator.next(response);
      const reject = (error) => {throw new Error(error)};

      const nextAsyncStep = resume();
      if(!nextAsyncStep.done) {
        const promise = Promise.resolve(nextAsyncStep.value)
        promise.then(response => doNextAsync(() =>resolve(response)))
               .catch(error => doNextAsync(() => reject(error)));
      }
    }
    doNextAsync(() => generator.next());
}
