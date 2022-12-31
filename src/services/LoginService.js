import axios from "axios";

const LOGIN_BASE_URL = "http://localhost:8080/api/auth/signin";

export class LoginService {
  async loginUser(email, password) {
    return await axios.post(LOGIN_BASE_URL, {
      emailId: email,
      password: password,
    });
  }
}
