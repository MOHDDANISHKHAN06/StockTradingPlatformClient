import instance from "../helper/authheader";

var user = JSON.parse(sessionStorage.getItem("user"));
// var emailId = user !== null ? user.emailId : null;
var emailId = sessionStorage.getItem("emailId");
const STOCK_API_BASE_URL = "http://localhost:8080/api/stocks";
const USERSTOCK_API_BASE_URL = `http://localhost:8080/api/users/${emailId}/stocks`;
const ORDER_API_BASE_URL = `http://localhost:8080/api/users/${emailId}/allorders`;
const BUY_SELL_API_BASE_URL = `http://localhost:8080/api/users/${emailId}/order`;

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
