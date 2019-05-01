
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
    yield book.getPage(currentPage);   // Read this page . Technically yiled pauses the function at this point
    currentPage++;
  }
}

const myBookReader = bookReader(myBook);
console.log(myBookReader.next());          // Object { value: "Page 1", done: false }
console.log(myBookReader.next());          // Object { value: "Page 2", done: false }

/*Each time next function is called , we are reading the next page.
Technically when yield pauses a generator, next resumres it
*/
