// 08_challenge.js
/*
JavaScript Object Coding Challenge: Book Inventory

Challenge Description: You are tasked with creating a simple book inventory management system using JavaScript objects. Your goal is to implement functions that perform operations on a collection of books stored as objects.

Requirements:

    Create a function addBook(title, author, genre, year) that adds a new book to the inventory. Each book should be represented as an object with properties for title, author, genre, and year.

    Create a function findBooksByAuthor(author) that returns an array of books written by a specific author.

    Create a function findBooksByGenre(genre) that returns an array of books belonging to a specific genre.

    Create a function updateBookTitle(title, newTitle) that updates the title of a book with the specified title.

    Create a function deleteBook(title) that removes a book from the inventory based on the title.

Additional Tasks (Optional):

Implement error handling for edge cases like duplicate book entries, non-existent books, etc.

*/

// Sample book inventory
let books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    year: 1925,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    year: 1960,
  },
  { title: "1984", author: "George Orwell", genre: "Dystopian", year: 1949 },
];

function addBook(title, author, genre, year) {
  books.push({ title: title, author: author, genre: genre, year: year });
}

function updateBookTitle(title, newTitle) {
  // Find the book object with the specified title
  /*
  Alternative way for
    let book = books.find(function(book) {
    return book.title === title;
    });
  */
  let book = books.find((book) => book.title === title);

  // If the book is found, update its title
  if (book) {
    book.title = newTitle;
    console.log(`Updated title of book "${title}" to "${newTitle}".`);
  } else {
    console.log(`Book with title "${title}" not found.`);
  }
}

function findBooksByAuthor(authorName) {
  let authorBooks = books.find((book) => book.author === authorName);
  return authorBooks;
}

function deleteBook(title) {
  // Find the index of the book object with the specified title
  let index = books.findIndex((book) => book.title === title);

  // If the book is found, remove it from the books array
  if (index !== -1) {
    books.splice(index, 1);
    console.log(`Book with title "${title}" has been deleted.`);
  } else {
    console.log(`Book with title "${title}" not found.`);
  }
}
// Add a new book
addBook("The Catcher in the Rye", "J.D. Salinger", "Fiction", 1951);

// Find books by author
let booksByAuthor = findBooksByAuthor("George Orwell");
console.log(booksByAuthor);
// Update book title
updateBookTitle("1984", "Nineteen Eighty-Four");

// Delete a book
deleteBook("The Great Gatsby");

console.log(books);
