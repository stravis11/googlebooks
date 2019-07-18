import axios from "axios";

export default {
  // All books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Book with ID
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Delete book with ID
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Save book to db
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  searchBook: function(query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query);
  }
};
