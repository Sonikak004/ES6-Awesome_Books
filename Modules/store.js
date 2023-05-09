const Store = () => {};

Store.getBooks = () => {
  let books;
  if (localStorage.getItem('books') === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem('books'));
  }
  return books;
};

Store.addBook = (book) => {
  const books = Store.getBooks();
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
};

export default Store;
