import axios from "axios";

const LOGIN_BASE_URL =
  "Stp-server-2-env.eba-pctz3tq8.us-east-2.elasticbeanstalk.com/api";

export class LoginService {
  async loginUser(email, password) {
    return await axios.post(LOGIN_BASE_URL, {
      emailId: email,
      password: password,
    });
  }
}
