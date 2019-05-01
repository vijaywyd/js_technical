
// Think of this function to return / give a book of specified title, ie we are buying this book
const buy = (title, noOfPages = 100) => ({
  title,
  noOfPages,
  getPage(pageNumber) {             //Think of this function to return content of this page in the book
    return `Page ${pageNumber}`
  }
});

const myBook = buy("Sherlock Holmes", 200); // Bought a book titled Sherlock Holmes

function* bookReader(book) {        // Generator function : Its a bookmark to the given book
  let currentPage = 1;

  while(currentPage < book.noOfPages) {

    /* Read this page . Technically yiled pauses the function at this point
    */

    let turnPage = yield book.getPage(currentPage);// Turn no of pages as specified by myBookReader .
    currentPage += turnPage;
  }
}

const myBookReader = bookReader(myBook);
console.log(myBookReader.next());          // Object { value: "Page 1", done: false } done indicates if we have completed reading

/*Two-way argument pass . We can pass argument back to the generator, value being the argument of next function
  ie Instead of reading next page, i am going to read 10th page from current.
*/
console.log(myBookReader.next(10));          // Object { value: "Page 11", done: false }

/*Each time next function is called , we are reading the next page.
Technically when yield pauses a generator, next resumres it
*/
