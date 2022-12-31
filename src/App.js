import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddUser from "./components/AddUser";
import Header from "./components/Header";
import StockList from "./components/StockList";
import UserList from "./components/UserList";
import LoginPage from "./components/LoginPage";
import UserPage from "./components/UserPage";
import Wallet from "./components/Wallet";
import OrderList from "./components/OrderList";
import TransactionList from "./components/TransactionList";
import CreateStock from "./components/CreateStock";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<LoginPage />}></Route>
          <Route path="/adm" element={<CreateStock />}></Route>
          <Route path="/admin" element={<UserList />}></Route>
          {/* <Route path="/" element={<StockList />}></Route> */}
          <Route path="/register" element={<AddUser />}></Route>
          <Route path="/stocks" element={<StockList />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/user" element={<UserPage />}></Route>
          <Route path="/wallet" element={<Wallet />}></Route>
          <Route path="/transactions" element={<TransactionList />}></Route>
          <Route path="/orders" element={<OrderList />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
