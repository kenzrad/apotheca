import axios from "axios";

export default {
  // Gets all elements
  getElements: function () {
    return axios.get("/api/element");
  },

  // Gets all remedies
  getRemedies: function () {
    return axios.get("/api/remedy");
  },

  //check the userName and password to login
  getUserLogin: function (login) {
    return axios.post("/api/login/login", login)
  },

  //Checks if userName is available
  getUserNameCheck: function (userName) {
    return axios.post("api/login/username", userName)
  },

  //getUserElement API Call
  getUserElements: function (restrictions) {
    return axios.post("/api/element/userelements", restrictions)
  },

  //getUserComponenet API Call
  getUserComponents: function (componentId) {
    return axios.post("/api/component/componentid", componentId)
  },

  //getUserRemedy API Call
  getUserRemedies: function (remedyId) {
    return axios.post("/api/remedy/remedyid", remedyId)
  },

  //putLoginUser
  createLoginUser: function (newUser) {
    return axios.put("/api/login/create", newUser)
  }

  
};