// controller.js

let booksPerPage = 6;
let currentPage = 1;
let sortByTitleAsc = false;
let sortByPriceAsc = false;

function displayBooks() {
  let books = getBooks();

  if (sortByTitleAsc === true) {
    sortByPriceAsc = false;
    books.sort((a, b) => a.title.localeCompare(b.title));
  }
  if (sortByPriceAsc === true) {
    sortByTitleAsc = false;
    books.sort((a, b) => a.price - b.price);
  }

  renderBooks(books);
  updatePagination(books.length);
}

function saveRating(bookId) {
  const rate = document.getElementById('rate').value;
  const books = getBooks();
  const book = books.find(b => b.id === bookId);
  book.Rate = rate;
  saveBooks(books);
}

function updateBook(bookId) {
  const title = document.getElementById('newBookTitle').value;
  const price = parseFloat(document.getElementById('newBookPrice').value);
  const image = document.getElementById('newBookImage').value;

  const books = getBooks();
  const book = books.find(b => b.id === bookId);
  book.title = title;
  book.price = price;
  book.image = image;

  saveBooks(books);
  displayBooks();
  document.getElementById('addBookModal').style.display = 'none';
}

function deleteBook(bookId) {
  const books = getBooks().filter(b => b.id !== bookId);
  saveBooks(books);
  displayBooks();
}

function saveNewBook() {
  const title = document.getElementById('newBookTitle').value;
  const price = parseFloat(document.getElementById('newBookPrice').value);
  const image = document.getElementById('newBookImage').value;

  if (title === "" || isNaN(price) || image === "") {
    alert("Please fill in all fields");
    return;
  }

  const books = getBooks();
  const newId = books.length ? Math.max(...books.map(book => book.id)) + 1 : 1;
  const newBook = { id: newId, title: title, price: price, image: image, Rate: 0 };
  books.push(newBook);
  saveBooks(books);
  displayBooks();
  document.getElementById('addBookModal').style.display = 'none';
}
