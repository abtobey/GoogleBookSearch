import axios from "axios";
export default {
  // Gets all users
  getBooks: function(title) {
    const apiString="https://www.googleapis.com/books/v1/volumes?q="+title+"&key=AIzaSyA3pt_Ac2EeFTr7IfK1Ya_ogPwlC0GOynQ"
    return axios.get(apiString);
  },

  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
};