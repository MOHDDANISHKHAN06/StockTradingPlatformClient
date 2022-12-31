import instance from "../helper/authheader";

var emailID = localStorage.getItem("email");
const STOCK_API_BASE_URL = "http://localhost:8080/api/stocks";
const USERSTOCK_API_BASE_URL = `http://localhost:8080/api/users/${emailID}/stocks`;
const ORDER_API_BASE_URL = `http://localhost:8080/api/users/${emailID}/allorders`;
const BUY_SELL_API_BASE_URL = `http://localhost:8080/api/users/${emailID}/order`;

export class StockService {
  getStocks() {
    return instance.get(STOCK_API_BASE_URL);
  }
  getUserStocks() {
    return instance.get(USERSTOCK_API_BASE_URL);
  }
  getOrders() {
    return instance.get(ORDER_API_BASE_URL);
  }
  placeOrder(order) {
    return instance.post(BUY_SELL_API_BASE_URL, order);
  }
}
