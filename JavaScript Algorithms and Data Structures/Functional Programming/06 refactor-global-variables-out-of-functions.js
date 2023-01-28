// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookList, bookName) {
  let bookListNew = bookList.slice()
  bookListNew.push(bookName);
  return bookListNew;
  
  // Change code above this line
}

// Change code below this line
function remove(bookList, bookName) {
  let bookListNew = bookList.slice()
  const book_index = bookListNew.indexOf(bookName);
  if (book_index >= 0) {

    bookListNew.splice(book_index, 1);
    return bookListNew;

    // Change code above this line
    }
}