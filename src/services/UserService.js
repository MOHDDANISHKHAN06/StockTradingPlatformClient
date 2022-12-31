import instance from "../helper/authheader";

var emailID = localStorage.getItem("email");
const USER_API_BASE_URL = "http://localhost:8080/api/users";
const WALLET_API_BASE_URL = `http://localhost:8080/api/users/${emailID}/wallet`;

export class UserService {
  saveUser(user) {
    return instance.post(USER_API_BASE_URL, user);
  }
  getUser() {
    return instance.get(USER_API_BASE_URL);
  }
  getWallet() {
    return instance.get(WALLET_API_BASE_URL);
  }
}
export default new UserService();
