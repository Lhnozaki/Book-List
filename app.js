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
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
}

// Create error message prototype
UI.prototype.showAlert = function(message, className) {
// Create the Div for Error Message
const div = document.createElement("div");
// Add the class
div.className = `alert ${className}`;
// Add text
div.appendChild(document.createTextNode(message));
// Get parent
const container = document.querySelector(".container");
const form = document.querySelector("#book-form");
// Append
container.insertBefore(div, form);
// Set Timeout
setTimeout(() => {
  document.querySelector(".alert").remove();
}, 3000);
//console.log(div);
}

// Delete Book Prototype
UI.prototype.deleteBook = function(target) {
  if(target.className === "delete") {
    target.parentElement.parentElement.remove();
  }
}

// Event Listener to add new book to list
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

    // Validation
    if(title === "" || author === "" || isbn === "") {
      // Error Message
      ui.showAlert("Please fill in all fields", "error");
    } else {
    // Add Book to List
    ui.addBooktoList(book);

    // Show Success Message
    ui.showAlert("Book Added!", "success");

    // Clear Fields
    ui.clearFields();
    }

    e.preventDefault();
  });

  // Delete book from list with "X" link.
  document.getElementById("book-list").addEventListener("click", remove);

  function remove(e) {
    // re-declare variable for ui
    const ui = new UI();

    // Delete Book
    ui.deleteBook(e.target);

    // Show Message
    ui.showAlert("Book Removed!", "removed");

    e.preventDefault();
  }