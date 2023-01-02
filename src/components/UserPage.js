import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { StockService } from "../services/StockService";
import Stock from "./Stock";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const UserPage = () => {
  var userRole = JSON.parse(sessionStorage.getItem("user")).role;
  console.log(userRole);
  var flag = false;
  if (userRole === `ADMIN`) flag = true;
  console.log(flag);

  const navigate = useNavigate();
  const [stock, setStocks] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userStocks, setuserStocks] = useState(null);

  const ref = useRef();

  const cancel = (e) => {
    e.preventDefault();
    navigate("/user");
    ref.current.close();
  };

  const [order, setOrder] = useState({
    ticker: "",
    numOfShares: "",
    orderType: "SELL",
    expiry: "",
    limitValue: "",
    emailId: sessionStorage.getItem("emailId"),
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setOrder({ ...order, [e.target.name]: value });
  };

  const SellStocks = (e, ticker) => {
    console.log(ticker);
    order.ticker = ticker;
    console.log(order);
    e.preventDefault();
    new StockService()
      .placeOrder(order)
      .then((response) => {
        console.log("navigate");
        console.log(response);
        navigate("/user");
        ref.current.close();
        window.location.reload(true);
      })
      .catch((error) => {
        console.log(error);
        console.log("unsuccessful");
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        //console.log("user page");
        const response1 = await new StockService().getStocks();
        setStocks(response1.data);
        //console.log("user");
        const response2 = await new StockService().getUserStocks(); //userstocks service
        setuserStocks(response2.data);
        // console.log("userstocks");
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const logout = (e) => {
    sessionStorage.removeItem("user");
    navigate("/login");
    window.location.reload(true);
  };

  return (
    <div className="container mx-auto my-8">
      <div className="bg-gray-800">
        <div className="h-16 px-8 flex items-center">
          <p className="text-white text-center font-bold font-center">
            Stocks in Market
          </p>
        </div>
      </div>
      <table className="min-w-full">
        <thead className="bg-gray-400">
          <tr>
            <th className="text-left font-medium text-white uppercase tracking-wider py-3 px-6">
              Ticker
            </th>
            <th className="text-left font-medium text-white uppercase tracking-wider py-3 px-6">
              Company Name
            </th>
            <th className="text-left font-medium text-white uppercase tracking-wider py-3 px-6">
              Opening Price
            </th>
            <th className="text-left font-medium text-white uppercase tracking-wider py-3 px-6">
              Current Price
            </th>
            <th className="text-left font-medium text-white uppercase tracking-wider py-3 px-6">
              Volume
            </th>
            <th className="text-left font-medium text-white uppercase tracking-wider py-3 px-6">
              Day High
            </th>
            <th className="text-left font-medium text-white uppercase tracking-wider py-3 px-6">
              Day Low
            </th>
            <th className="text-left font-medium text-white uppercase tracking-wider py-3 px-6">
              Market Capitalisation
            </th>
            <th className="text-left font-medium text-white uppercase tracking-wider py-3 px-6">
              Operation
            </th>
          </tr>
        </thead>
        {!loading && (
          <tbody className="bg-white">
            {stock.map((stock) => (
              <Stock stock={stock} key={stock.ticker}></Stock>
            ))}
          </tbody>
        )}
      </table>
      <div className="bg-gray-800">
        <div className="h-16 px-8 flex items-center">
          <p className="text-white text-center font-bold font-center">
            Your Stocks{" "}
          </p>
        </div>
      </div>
      <table className="min-w-full">
        <thead className="bg-gray-400">
          <tr>
            <th className="text-left font-medium text-white uppercase tracking-wider py-3 px-6">
              Ticker
            </th>
            <th className="text-left font-medium text-white uppercase tracking-wider py-3 px-6">
              Number of shares
            </th>
            <th className="text-left font-medium text-white uppercase tracking-wider py-3 px-6">
              Operation
            </th>
          </tr>
        </thead>
        {!loading && (
          <tbody className="bg-white">
            {userStocks.map((userStocks) => (
              <tr key={userStocks.id}>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">
                    {userStocks.id.ticker}
                  </div>
                </td>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">
                    {userStocks.numOfShares}
                  </div>
                </td>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">
                    <a>
                      <Popup
                        ref={ref}
                        trigger={
                          <button /*onClick={(e,ticker)=> placeOrder(e,ticker)*/
                            className="text-indigo-300 hover:text-indigo-800 px-4 hover:cursor-pointer"
                          >
                            {" "}
                            Sell{" "}
                          </button>
                        }
                        modal
                      >
                        <span>
                          <div className="flex max-w-2xl mx-auto shadow border-b">
                            <div className="px-8 py-8">
                              <div className="items-center justify-center h-14 w-full my-4">
                                <label className="block text-gray-600 text-sm font-normal">
                                  Ticker
                                </label>
                                <input
                                  type="text"
                                  name="ticker"
                                  value={userStocks.id.ticker}
                                  onChange={(e) => handleChange(e)}
                                  className="h-10 w-96 border mt-2 px-2 py-2"
                                ></input>
                              </div>
                              <div className="items-center justify-center h-14 w-full my-4">
                                <label className="block text-gray-600 text-sm font-normal">
                                  Number of shares
                                </label>
                                <input
                                  type="number"
                                  name="numOfShares"
                                  onChange={(e) => handleChange(e)}
                                  className="h-10 w-96 border mt-2 px-2 py-2"
                                ></input>
                              </div>
                              <div className="items-center justify-center h-14 w-full my-4 hover:optional:">
                                <label className="block text-gray-600 text-sm font-normal">
                                  Limit Value (Optional : required for placing
                                  Limit Order)
                                </label>
                                <input
                                  type="number"
                                  name="limitValue"
                                  onChange={(e) => handleChange(e)}
                                  className="h-10 w-96 border mt-2 px-2 py-2"
                                ></input>
                              </div>
                              <div className="items-center justify-center h-14 w-full my-4">
                                <label className="block text-gray-600 text-sm font-normal">
                                  Date of Expiry (Optional : required for
                                  placing Limit Order)
                                </label>
                                <input
                                  type="date"
                                  name="expiry"
                                  onChange={(e) => handleChange(e)}
                                  className="h-10 w-96 border mt-2 px-2 py-2"
                                ></input>
                              </div>
                              <div className="text-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                                <button
                                  onClick={(e, ticker) =>
                                    SellStocks(e, userStocks.id.ticker)
                                  }
                                  className="  rounded text-white font-semibold bg-blue-400 hover:bg-green-700 py-2 px-6"
                                >
                                  Sell
                                </button>
                                <button
                                  onClick={cancel}
                                  className="  rounded text-white font-semibold bg-blue-400 hover:bg-green-700 py-2 px-6"
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </div>
                        </span>
                      </Popup>
                    </a>{" "}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
      <div>
        <tr>
          <button
            onClick={() => navigate("/wallet")}
            className="rounded text-white font-semibold bg-gray-500 hover:bg-gray-800 py-2 px-6"
          >
            MyWallet
          </button>
          <button
            onClick={() => navigate("/orders")}
            className="rounded text-white font-semibold bg-gray-500 hover:bg-gray-800 py-2 px-6"
          >
            MyOrders
          </button>
          <button
            onClick={() => navigate("/transactions")}
            className="rounded text-white font-semibold bg-gray-500 hover:bg-gray-800 py-2 px-6"
          >
            MyTransactions
          </button>
          <button
            hidden={!flag}
            onClick={() => navigate("/createstock")}
            className="rounded text-white font-semibold bg-gray-500 hover:bg-gray-800 py-2 px-6"
          >
            Create Stock
          </button>
          <button
            hidden={!flag}
            onClick={() => navigate("/listofusers")}
            className="rounded text-white font-semibold bg-gray-500 hover:bg-gray-800 py-2 px-6"
          >
            View Users
          </button>
          <button
            hidden={!flag}
            onClick={() => navigate("/marketschedule")}
            className="rounded text-white font-semibold bg-gray-500 hover:bg-gray-800 py-2 px-6"
          >
            Change Market
          </button>
          <button
            onClick={logout}
            className="rounded text-white font-semibold bg-red-500 hover:bg-gray-800 py-2 px-6"
          >
            Logout
          </button>
        </tr>
      </div>
    </div>
  );
};

export default UserPage;
