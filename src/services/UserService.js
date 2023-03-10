import instance from "../helper/authheader";

var user = JSON.parse(sessionStorage.getItem("user"));
var emailId = sessionStorage.getItem("emailId");

// var emailId = user !== null ? user.emailId : null;
const USER_API_BASE_URL = "http://localhost:8080/api/auth/signup";
const ALL_USER_API_BASE_URL = `http://localhost:8080/api/users`;
const WALLET_API_BASE_URL = `http://localhost:8080/api/users/${emailId}/wallet`;
const TRANSACTION_API_BASE_URL = `http://localhost:8080/api/users/${emailId}/transaction`;
const CANCEL_ORDER_CASE_URL = `http://localhost:8080/api/users/${emailId}/cancel`;
const CHANGE_MKT_TIME_BASE_URL =
  "http://localhost:8080/api/market/changemarkethours";
const ADD_HOLIDAY_BASE_URL = "http://localhost:8080/api/market/addHoliday";
const GET_MKT_SCHEDULE_BASE_URL = "http://localhost:8080/api/marketschedule";

const DELETE_HOLIDAY_BASE_URL =
  "http://localhost:8080/api/market/deleteHoliday";

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
