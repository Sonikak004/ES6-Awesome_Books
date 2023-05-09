const Book = (title, author) => {
  const book = Object.create(Book.prototype);
  book.title = title;
  book.author = author;
  return book;
};
Book.prototype = Object.create(Object.prototype);

export default Book;