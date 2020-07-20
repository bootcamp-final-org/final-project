import axios from "axios";

export default {
  // Gets all users
  getUsers: function() {
    return axios.get("/api/students");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/students/" + id);
  },
   // Gets all users
   getTutors: function() {
    return axios.get("/api/tutors");
  },
  // Deletes the user with the given id
  deleteBook: function(id) {
    return axios.delete("/api/students/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/students", userData);
  }
};
