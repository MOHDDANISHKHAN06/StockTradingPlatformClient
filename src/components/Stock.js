import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { StockService } from "../services/StockService";

const Stock = ({ stock }) => {
  const navigate = useNavigate();
  const ref = useRef();

  const [order, setOrder] = useState({
    ticker: "",
    numOfShares: "",
    orderType: "BUY",
    expiry: "",
    limitValue: "",
    emailId: sessionStorage.getItem("emailId"),
  });
  const handleChange = (e) => {
    const value = e.target.value;
    setOrder({ ...order, [e.target.name]: value });
  };

  const BuyStocks = (e) => {
    order.ticker = stock.ticker;
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
        console.log(order);
        console.log(error);
      });
  };

  return (
    <tr key={stock.ticker}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{stock.ticker}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{stock.companyName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{stock.initialPrice}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{stock.currentPrice}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{stock.volume}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{stock.dayHigh}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{stock.dayLow}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">
          {stock.marketCapitalisation}
        </div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <a>
          <Popup
            ref={ref}
            trigger={
              <button /*onClick={(e,ticker)=> placeOrder(e,ticker)*/
                className="text-indigo-300 hover:text-indigo-800 px-4 hover:cursor-pointer"
              >
                {" "}
                Buy{" "}
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
                      value={stock.ticker}
                      onChange={(e) => handleChange(e)}
                      className="h-10 w-96 border mt-2 px-2 py-2"
                    ></input>
                  </div>
                  <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">
                      Current Price
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={stock.currentPrice}
                      // onChange={(e) => handleChange(e)}
                      className="h-10 w-96 border mt-2 px-2 py-2"
                    ></input>
                  </div>
                  <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">
                      Number of shares
                    </label>
                    <input
                      type="text"
                      name="numOfShares"
                      onChange={(e) => handleChange(e)}
                      className="h-10 w-96 border mt-2 px-2 py-2"
                    ></input>
                  </div>

                  <div className="items-center justify-center h-14 w-full my-4 hover:optional:">
                    <label className="block text-gray-600 text-sm font-normal">
                      Limit Value (Optional : required for placing Limit Order)
                    </label>
                    <input
                      type="text"
                      name="limitValue"
                      onChange={(e) => handleChange(e)}
                      className="h-10 w-96 border mt-2 px-2 py-2"
                    ></input>
                  </div>
                  <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">
                      Date of Expiry (Optional)
                    </label>
                    <input
                      type="datetime-local"
                      name="expiry"
                      onChange={(e) => handleChange(e)}
                      className="h-10 w-96 border mt-2 px-2 py-2"
                    ></input>
                  </div>
                  <div className="text-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                    <button
                      className="  rounded text-white font-semibold bg-blue-400 hover:bg-green-700 py-2 px-6"
                      onClick={BuyStocks}
                    >
                      Buy
                    </button>
                    <button className="  rounded text-white font-semibold bg-blue-400 hover:bg-green-700 py-2 px-6">
                      Clear
                    </button>
                  </div>
                </div>
              </div>
            </span>
          </Popup>
        </a>
      </td>
    </tr>
  );
};

export default Stock;
