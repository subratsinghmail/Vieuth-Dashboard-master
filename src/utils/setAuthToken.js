//Before we begin creating our actions.We’ll use this to set and delete the Authorization header for our axios requests depending on whether a user is logged in or not 
//axios.defaults.headers.common["Authorization"]=This is authorization header.In Backend Part we will be setting an Authorization header in Postman when testing our private api route
/*
import axios from "axios";

const setAuthToken = token => {
  if (token) {
    // Apply authorization token to every request if logged in
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};
export default setAuthToken;
*/