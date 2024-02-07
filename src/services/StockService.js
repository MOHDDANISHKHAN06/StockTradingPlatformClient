import instance from "../helper/authheader";

// Assuming the base URL is the same for these endpoints
const BASE_URL =
  "http://Stp-server-2-env.eba-pctz3tq8.us-east-2.elasticbeanstalk.com/api";
// Dynamically retrieve the emailId from sessionStorage
var emailId = sessionStorage.getItem("emailId");

// Updated API endpoints using the BASE_URL constant
const STOCK_API_BASE_URL = `${BASE_URL}/stocks`; // For stock-related actions
const USERSTOCK_API_BASE_URL = `${BASE_URL}/users/${emailId}/stocks`; // For user-specific stock actions
const ORDER_API_BASE_URL = `${BASE_URL}/users/${emailId}/allorders`; // For retrieving all orders for a user
const BUY_SELL_API_BASE_URL = `${BASE_URL}/users/${emailId}/order`; // For placing buy or sell orders

export class StockService {
  getStocks() {
    return instance.get(STOCK_API_BASE_URL);
  }
  getUserStocks() {
    console.log("getUserStocks", USERSTOCK_API_BASE_URL);
    return instance.get(USERSTOCK_API_BASE_URL);
  }
  getOrders() {
    return instance.get(ORDER_API_BASE_URL);
  }
  placeOrder(order) {
    return instance.post(BUY_SELL_API_BASE_URL, order);
  }
  addStock(stock) {
    return instance.post(STOCK_API_BASE_URL, stock);
  }
}
