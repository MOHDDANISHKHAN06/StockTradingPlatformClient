import axios from "axios";

const LOGIN_BASE_URL =
  "http://stp-server-2-env.eba-pctz3tq8.us-east-2.elasticbeanstalk.com/api/auth/signin";

export class LoginService {
  async loginUser(email, password) {
    return await axios.post(LOGIN_BASE_URL, {
      emailId: email,
      password: password,
    });
  }
}
