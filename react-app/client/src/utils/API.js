import axios from "axios";

export default {
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Finds a user based on email and password
  login: function(userData) {
    console.log("Find User ----------------------------------------")
    console.log(userData)
    console.log("And then ----------------------------------------")

    return axios.post("/api/login", userData);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },

  // Saves a user to the database
  saveUser: function(userData) {
    console.log(userData);
    return axios.post("/api/users", userData);
  }
};
