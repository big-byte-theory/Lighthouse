import axios from "axios";

const backendUrl = import.meta.env.VITE_APP_BACKENDURL;

export const submitAuthForm = async (userDetails, action) => {
  try {
    // Make a post request with the user details and path
    const response = await axios.post(`${backendUrl}${action}`, userDetails);
    // return the data response from the server
    return response;
  } catch (e) {
    console.log(e);
    return e.response;
  }
};