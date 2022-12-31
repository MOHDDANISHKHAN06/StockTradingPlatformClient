import instance from "../helper/authheader";

var emailID = localStorage.getItem("email");
const USER_API_BASE_URL = "http://localhost:8080/api/auth/signup";
const WALLET_API_BASE_URL = `http://localhost:8080/api/users/${emailID}/wallet`;
const TRANSACTION_API_BASE_URL = `http://localhost:8080/api/users/${emailID}/transaction`;

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
  transactionWallet(transaction) {
    return instance.post(TRANSACTION_API_BASE_URL, transaction);
  }
  getTransaction() {
    return instance.get(TRANSACTION_API_BASE_URL);
  }
}
export default new UserService();
