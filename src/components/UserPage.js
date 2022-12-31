import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StockService } from "../services/StockService";
import Stock from "./Stock";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const UserPage = () => {
  const navigate = useNavigate();
  const [stock, setStocks] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userStocks, setuserStocks] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        console.log("user page");
        const response1 = await new StockService().getStocks();
        setStocks(response1.data);
        const response2 = await new StockService().getUserStocks(); //userstocks service
        setuserStocks(response2.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto my-8">
      <div className="bg-gray-800">
        <div className="h-16 px-8 flex items-center">
          <p className="text-white text-center font-bold font-center">
            List Of Stocks
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
            List Of User Stocks
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
                                  name="fullName"
                                  value={userStocks.id.ticker}
                                  /*onChange={(e) => handleChange(e)}*/
                                  className="h-10 w-96 border mt-2 px-2 py-2"
                                ></input>
                              </div>
                              <div className="items-center justify-center h-14 w-full my-4">
                                <label className="block text-gray-600 text-sm font-normal">
                                  Number of shares
                                </label>
                                <input
                                  type="text"
                                  name="fullName"
                                  className="h-10 w-96 border mt-2 px-2 py-2"
                                ></input>
                              </div>
                              <div className="items-center justify-center h-14 w-full my-4 hover:optional:">
                                <label className="block text-gray-600 text-sm font-normal">
                                  Limit Value (Optional : required for placing
                                  Limit Order)
                                </label>
                                <input
                                  type="text"
                                  name="limitValue"
                                  className="h-10 w-96 border mt-2 px-2 py-2"
                                ></input>
                              </div>
                              <div className="items-center justify-center h-14 w-full my-4">
                                <label className="block text-gray-600 text-sm font-normal">
                                  Date of Expiry (Optional : required for
                                  placing Limit Order)
                                </label>
                                <input
                                  type="datetime-local"
                                  name="expiry"
                                  className="h-10 w-96 border mt-2 px-2 py-2"
                                ></input>
                              </div>
                              <div className="text-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                                <button className="  rounded text-white font-semibold bg-blue-400 hover:bg-green-700 py-2 px-6">
                                  Sell
                                </button>
                                <button className="  rounded text-white font-semibold bg-blue-400 hover:bg-green-700 py-2 px-6">
                                  Clear
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
      <thead className="bg-gray-400">
        <tr>
          <button
            onClick={() => navigate("/wallet")}
            className="rounded text-white font-semibold bg-blue-500 hover:bg-gray-800 py-2 px-6"
          >
            MyWallet
          </button>
          <button
            onClick={() => navigate("/orders")}
            className="rounded text-white font-semibold bg-blue-500 hover:bg-gray-800 py-2 px-6"
          >
            MyOrders
          </button>
          <button
            onClick={() => navigate("/transactions")}
            className="rounded text-white font-semibold bg-blue-500 hover:bg-gray-800 py-2 px-6"
          >
            MyTransactions
          </button>
        </tr>
      </thead>
    </div>
  );
};

export default UserPage;
