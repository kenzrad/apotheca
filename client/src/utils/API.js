import axios from "axios";

export default {
  // Gets all books
  getElements: function () {
    console.log("2. i am in the Client API folder");
    return axios.get("/api/element");
  },
  // Gets the book with the given id
  getUserProfile: function (id) {
    return axios.get("/api/profile/" + id);
  }
};
