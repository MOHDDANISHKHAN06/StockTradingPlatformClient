import axios from "axios";
import { useNavigate } from "react-router-dom";

const instance = axios.create();

// instance.interceptors.request.use(
//   (config) => {
//     let user = localStorage.getItem("user");
//     console.log(user);
//     if (user) {
//       config.headers["Authorization"] = "Basic" + user.authdata;
//     }
//     config.headers["Content-Type"] = "application/json";
//     return config;
//   },
//   (error) => {
//     Promise.reject(error);
//   }
// );

instance.interceptors.request.use((req) => {
  // `req` is the Axios request config, so you can modify
  // the `headers`.
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
    req.headers.authorization = "Basic " + user.authdata;
  }
  return req;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    if (error.response.status === 401 || error.response.status === 403) {
      // add a popup with error that login failed.
      console.log("here");
      useNavigate("/stocks");
    }
  }
);

export default instance;
