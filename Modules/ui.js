import Store from './store.js';

const UI = () => {};

UI.displayBooks = () => {
  const books = Store.getBooks();
  books.forEach((book) => UI.addBookToList(book));
};

UI.addBookToList = (book) => {
  const list = document.querySelector('#book-list');
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td><a href="#" class="btn btn-secondary btn-sm delete btn-hover">Remove</a></td>
  `;
  list.appendChild(row);
};

UI.deleteBook = (el) => {
  if (el.classList.contains('delete')) {
    el.parentElement.parentElement.remove();
  }
};

UI.showAlert = (message, className) => {
  const div = document.createElement('div');
  div.className = `alert alert-${className}`;
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector('.container');
  const form = document.querySelector('#book-form');
  container.insertBefore(div, form);
  // Vanish in 2.5 seconds
  setTimeout(() => document.querySelector('.alert').remove(), 2500);
};

UI.clearFields = () => {
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
};

export default UI;
