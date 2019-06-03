// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}

// Create UI prototype to add the field values to existing table.
UI.prototype.addBooktoList = function(book) {
  const list = document.getElementById("book-list");
  // Create TR element
  const row = document.createElement("tr");
  // Insert elements
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `;

  list.appendChild(row);
}

// Clear Fields prototype
UI.prototype.clearFields = function() {
  document.getElementById("title").value = " ";
  document.getElementById("author").value = " ";
  document.getElementById("isbn").value = " ";
}

// Event Listeners
let eventOne = document.getElementById("book-form").addEventListener("submit", 
  function(e) {
    // Get Form Values
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;

    // Create a book from the Book Constructor using the values in the fields.
    const book = new Book (title, author, isbn);
    
    // Create a UI from the UI Constructor
    const ui = new UI();

    // Add Book to List
    ui.addBooktoList(book);

    // Clear Fields
    ui.clearFields();

    e.preventDefault();
  });
