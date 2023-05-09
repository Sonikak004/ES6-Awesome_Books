import { DateTime } from './node_modules/luxon/src/luxon.js';
import Book from './Modules/book.js';
import Store from './Modules/store.js';
import UI from './Modules/ui.js';

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);
// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
  // Prevent actual submit
  e.preventDefault();
  // Get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  // Validate
  if (title === '' || author === '') {
    UI.showAlert('Please fill in all fields', 'danger');
  } else {
    // Instantiate book
    const book = Book(title, author);
    // Add book to UI
    UI.addBookToList(book);
    // Add book to store
    Store.addBook(book);
    // Show success message
    UI.showAlert('Book Added', 'success');
    // Clear fields
    UI.clearFields();
  }
});
// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {
  // Remove book from UI
  UI.deleteBook(e.target);
  // Remove book from local storage
  localStorage.clear();
});

const itemOne = document.getElementById('item1');
const itemTwo = document.getElementById('item2');
const itemThree = document.getElementById('item3');
const bookSection = document.getElementById('book-section');
const addSection = document.getElementById('add-section');
const contactSection = document.getElementById('contact-section');

// when link is clicked the rest of the sections are hidden using the class

itemOne.addEventListener('click', () => {
  bookSection.classList.remove('hidden');
  addSection.classList.add('hidden');
  contactSection.classList.add('hidden');
});

itemTwo.addEventListener('click', () => {
  addSection.classList.remove('hidden');
  bookSection.classList.add('hidden');
  contactSection.classList.add('hidden');
});

itemThree.addEventListener('click', () => {
  contactSection.classList.remove('hidden');
  bookSection.classList.add('hidden');
  addSection.classList.add('hidden');
});

// date using Luxon library UTC +1 program time zone!

const dateAndTime = () => {
  const now = DateTime.local();
  const formattedDateTime = now.toFormat('LLLL dd, yyyy HH:mm:ss');
  document.getElementById('date-time').textContent = formattedDateTime;
};

dateAndTime();
setInterval(dateAndTime, 1000);