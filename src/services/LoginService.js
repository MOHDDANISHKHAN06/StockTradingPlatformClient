import axios from "axios";

const LOGIN_BASE_URL = "http://localhost:8080/api/auth/signin";
// const LOGIN_BASE_URL =
//   "http://stock-trading-platform.railway.internal/api/auth/signin"; // Updated URL

export class LoginService {
  async loginUser(email, password) {
    return await axios.post(LOGIN_BASE_URL, {
      emailId: email,
      password: password,
    });
  }
}
