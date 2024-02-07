import instance from "../helper/authheader";

var user = JSON.parse(sessionStorage.getItem("user"));
var emailId = sessionStorage.getItem("emailId");

// Global constant for the common part of the URLs
const BASE_URL = "http://stock-trading-platform.railway.internal/api";

// Updated API endpoints using the BASE_URL constant
const USER_API_BASE_URL = `${BASE_URL}/auth/signup`; // For user registration
const ALL_USER_API_BASE_URL = `${BASE_URL}/users`; // For retrieving all users
const WALLET_API_BASE_URL = `${BASE_URL}/users/${emailId}/wallet`; // For wallet-related actions
const TRANSACTION_API_BASE_URL = `${BASE_URL}/users/${emailId}/transaction`; // For transactions
const CANCEL_ORDER_CASE_URL = `${BASE_URL}/users/${emailId}/cancel`; // For canceling orders
const CHANGE_MKT_TIME_BASE_URL = `${BASE_URL}/market/changemarkethours`; // For changing market hours
const ADD_HOLIDAY_BASE_URL = `${BASE_URL}/market/addHoliday`; // For adding holidays
const GET_MKT_SCHEDULE_BASE_URL = `${BASE_URL}/marketschedule`; // For getting market schedules
const DELETE_HOLIDAY_BASE_URL = `${BASE_URL}/market/deleteHoliday`; // For deleting holidays

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
