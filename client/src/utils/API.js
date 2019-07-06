import axios from "axios";

export default {
  // Gets all elements
  getElements: function () {
    return axios.get("/api/element");
  },
  // Gets the element with the given id
  getUserProfile: function (id) {
    return axios.get("/api/profile/" + id);
  }
};
