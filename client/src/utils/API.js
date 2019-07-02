import axios from "axios";

export default {
  // Gets all books
  getElements: function() {
    return axios.get("/api/elements");
  },
  // Gets the book with the given id
  getUserProfile: function(id) {
    return axios.get("/api/profile/" + id);
  }
};
