import axios from "axios";
import setAuthToken from "../../utils/set-auth-token";
import jwt_decode from "jwt-decode";

export const signUpUser = async (userData) => {
  try {
    const result = await axios.post("/api/students/signup", userData);
    return result;
  } catch (err) {
    console.log(err);
  }
};

//Sign in - Get User Token
export const signInUser = async (userData) => {
  try {
    const res = await axios.post("/api/students/login", userData);
    //save to localstorage
    const { token } = res.data;
    //set token to localStorage
    localStorage.setItem("jwtToken", token);
    //set token to auth header
    setAuthToken(token);
    //decode token to get user data
    jwt_decode(token);
    console.log(userData);
  } catch (err) {
    console.log(err);
  }
};

//Sign out user

export const signOutUser = () => {
  //remove token from localStorage
  localStorage.removeItem("jwtToken");
  //remove auth header for future requests
  setAuthToken(false);
};
