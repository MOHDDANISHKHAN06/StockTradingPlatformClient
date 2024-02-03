import instance from "../helper/authheader";

// var user = JSON.parse(sessionStorage.getItem("user"));
// var emailId = user !== null ? user.emailId : null;
var emailId = sessionStorage.getItem("emailId");
const STOCK_API_BASE_URL = "http://localhost:8080/api/stocks";
// const STOCK_API_BASE_URL =
// "http://stock-trading-platform.railway.internal/api/stocks"; // Updated URL
const USERSTOCK_API_BASE_URL = `http://localhost:8080/api/users/${emailId}/stocks`;
// const USERSTOCK_API_BASE_URL = `http://stock-trading-platform.railway.internal/api/users/${emailId}/stocks`; // Updated URL
const ORDER_API_BASE_URL = `http://localhost:8080/api/users/${emailId}/allorders`;
// const ORDER_API_BASE_URL = `http://stock-trading-platform.railway.internal/api/users/${emailId}/allorders`; // Updated URL
const BUY_SELL_API_BASE_URL = `http://localhost:8080/api/users/${emailId}/order`;
// const BUY_SELL_API_BASE_URL = `http://stock-trading-platform.railway.internal/api/users/${emailId}/order`; // Updated URL

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
