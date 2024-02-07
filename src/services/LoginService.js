import axios from "axios";

const LOGIN_BASE_URL =
  "http://Stp-server-2-env.eba-pctz3tq8.us-east-2.elasticbeanstalk.com/api";
export class LoginService {
  async loginUser(email, password) {
    console.log("Making request to:", LOGIN_BASE_URL); // Debug log
    return await axios.post(LOGIN_BASE_URL, {
      emailId: email,
      password: password,
    });
  }
}
