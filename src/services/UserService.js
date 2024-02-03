import instance from "../helper/authheader";

var user = JSON.parse(sessionStorage.getItem("user"));
var emailId = sessionStorage.getItem("emailId");

// const USER_API_BASE_URL = "http://localhost:8080/api/auth/signup";
const USER_API_BASE_URL =
  "http://stock-trading-platform.railway.internal/api/auth/signup"; // Updated URL
// const ALL_USER_API_BASE_URL = `http://localhost:8080/api/users`;
const ALL_USER_API_BASE_URL = `http://stock-trading-platform.railway.internal/api/users`; // Updated URL
// const WALLET_API_BASE_URL = `http://localhost:8080/api/users/${emailId}/wallet`;
const WALLET_API_BASE_URL = `http://stock-trading-platform.railway.internal/api/users/${emailId}/wallet`; // Updated URL
// const TRANSACTION_API_BASE_URL = `http://localhost:8080/api/users/${emailId}/transaction`;
const TRANSACTION_API_BASE_URL = `http://stock-trading-platform.railway.internal/api/users/${emailId}/transaction`; // Updated URL
// const CANCEL_ORDER_CASE_URL = `http://localhost:8080/api/users/${emailId}/cancel`;
const CANCEL_ORDER_CASE_URL = `http://stock-trading-platform.railway.internal/api/users/${emailId}/cancel`; // Updated URL
// const CHANGE_MKT_TIME_BASE_URL = "http://localhost:8080/api/market/changemarkethours";
const CHANGE_MKT_TIME_BASE_URL =
  "http://stock-trading-platform.railway.internal/api/market/changemarkethours"; // Updated URL
// const ADD_HOLIDAY_BASE_URL = "http://localhost:8080/api/market/addHoliday";
const ADD_HOLIDAY_BASE_URL =
  "http://stock-trading-platform.railway.internal/api/market/addHoliday"; // Updated URL
// const GET_MKT_SCHEDULE_BASE_URL = "http://localhost:8080/api/marketschedule";
const GET_MKT_SCHEDULE_BASE_URL =
  "http://stock-trading-platform.railway.internal/api/marketschedule"; // Updated URL
// const DELETE_HOLIDAY_BASE_URL = "http://localhost:8080/api/market/deleteHoliday";
const DELETE_HOLIDAY_BASE_URL =
  "http://stock-trading-platform.railway.internal/api/market/deleteHoliday"; // Updated URL

export class UserService {
  saveUser(user) {
    return instance.post(USER_API_BASE_URL, user);
  }
  getUser() {
    return instance.get(USER_API_BASE_URL);
  }
  getAllUsers() {
    return instance.get(ALL_USER_API_BASE_URL);
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
  cancelOrder(orderId) {
    console.log(user);
    console.log(CANCEL_ORDER_CASE_URL);
    return instance.post(CANCEL_ORDER_CASE_URL, { orderId });
  }
  changeTimings(schedule) {
    return instance.post(CHANGE_MKT_TIME_BASE_URL, schedule);
  }
  addHoliday(holiday) {
    return instance.post(ADD_HOLIDAY_BASE_URL, holiday);
  }
  deleteHoliday(holiday) {
    return instance.post(DELETE_HOLIDAY_BASE_URL, holiday);
  }
  getMarketSchedule() {
    return instance.get(GET_MKT_SCHEDULE_BASE_URL);
  }
}
export default new UserService();
