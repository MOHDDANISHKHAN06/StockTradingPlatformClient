import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser';
import Header from './components/Header';
import StockList from './components/StockList';
import UserList from './components/UserList';
import LoginPage from './components/LoginPage';


function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element = {<StockList />}></Route>
        <Route path="/admin" element = {<UserList/>}></Route>
        <Route path="/" element = {<StockList/>}></Route>
        <Route path="/register" element = {<AddUser/>}></Route>
        <Route path="/stocks"  element = {<StockList/>}></Route>
        <Route path="/login"  element = {<LoginPage/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
