import axios from "axios";
import { compileFunction } from "vm";

export default {
  // Gets all elements
  getElements: function () {
    return axios.get("/api/element");
  },
  // Gets the element with the given id
  getUserProfile: function (id) {
    console.log(id)
    return axios.get("/api/user/" + id);
  },
  getUserLogin: function (login) {
    console.log(login);
    return axios.post("/api/login/login", login)
  },
};
