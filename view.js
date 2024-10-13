// view.js

function renderBooks(books) {
    const tbody = document.querySelector('#bookList tbody');
    tbody.innerHTML = '';
  
    const start = (currentPage - 1) * booksPerPage;
    const end = start + booksPerPage;
  
    books.slice(start, end).forEach(book => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${book.id}</td>
        <td>${book.title}</td>
        <td>$${book.price.toFixed(2)}</td>
        <td>
          <button class="read" onclick="showBookDetails(${book.id})">Read</button>
          <button class="update" onclick="showUpdateForm(${book.id})">Update</button>
          <button class="delete" onclick="deleteBook(${book.id})">Delete</button>
        </td>
      `;
      tbody.appendChild(row);
    });
  }
  
  function showBookDetails(bookId) {
    const books = getBooks();
    const book = books.find(b => b.id === bookId);
    const detailsDiv = document.getElementById('bookDetails');
    detailsDiv.innerHTML = `
      <h3 id="bookTitle">${book.title}</h3>
      <p id="priceb">Price: $${book.price}</p>
      <img id="imageb" src="${book.image}" alt="${book.title}">
      <label for="rate" id="titleRote">Rate:</label>
      <input type="number" id="rate" min="1" max="10" value="${book.Rate}">
      <button onclick="saveRating(${book.id})">Save Rating</button>
    `;
  }
  
  function updatePagination(totalBooks) {
    const totalPages = Math.ceil(totalBooks / booksPerPage);
    const pageNumbers = document.querySelector('#pageNumbers');
    pageNumbers.innerHTML = '';
  
    for (let i = 1; i <= totalPages; i++) {
      const span = document.createElement('span');
      span.textContent = i;
      if (i === currentPage) {
        span.classList.add('active');
      }
      span.addEventListener('click', () => {
        currentPage = i;
        displayBooks();
      });
      pageNumbers.appendChild(span);
    }
  }
  
  function showUpdateForm(bookId) {
    const books = getBooks();
    const book = books.find(b => b.id === bookId);
    const modal = document.getElementById('addBookModal');
    document.getElementById('modalTitle').textContent = 'Update Book';
  
    document.getElementById('newBookTitle').value = book.title;
    document.getElementById('newBookPrice').value = book.price;
    document.getElementById('newBookImage').value = book.image;
  
    const saveButton = document.getElementById('saveNewBookBtn');
    saveButton.onclick = () => updateBook(bookId);
  
    modal.style.display = 'block';
  }
  
  function openAddBookModal() {
    const modal = document.getElementById('addBookModal');
  
    document.getElementById('modalTitle').textContent = 'Add New Book';
    document.getElementById('newBookTitle').value = '';
    document.getElementById('newBookPrice').value = '';
    document.getElementById('newBookImage').value = '';
  
    const saveButton = document.getElementById('saveNewBookBtn');
    saveButton.onclick = saveNewBook;
  
    modal.style.display = 'block';
  }
  
  document.querySelector('#prevPage').addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      displayBooks();
    }
  });
  
  document.querySelector('#nextPage').addEventListener('click', () => {
    const books = getBooks();
    const totalPages = Math.ceil(books.length / booksPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      displayBooks();
    }
  });
  
  document.querySelector('#sortTitle').addEventListener('click', () => {
    sortByTitleAsc = true;
    sortByPriceAsc = false;
    displayBooks();
  });
  
  document.querySelector('#sortPrice').addEventListener('click', () => {
    sortByPriceAsc = true;
    sortByTitleAsc = false;
    displayBooks();
  });
  
  document.getElementById('addBookBtn').addEventListener('click', openAddBookModal);
  
  displayBooks();
  