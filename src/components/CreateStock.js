import React, { useState } from "react";
import { StockService } from "../services/StockService";
import { useNavigate } from "react-router-dom";

const CreateStock = () => {
  const navigate = useNavigate();

  const [stock, setStock] = useState({
    ticker: "",
    companyName: "",
    initialPrice: "",
    currentPrice: "",
    volume: 0,
    dayHigh: 0,
    dayLow: 0,
    marketCapitalisation: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setStock({ ...stock, [e.target.name]: value });
  };

  const saveStock = (e) => {
    stock.currentPrice = stock.initialPrice;
    stock.dayLow = stock.initialPrice;
    stock.dayHigh = stock.initialPrice;
    e.preventDefault();
    console.log(stock);
    new StockService()
      .addStock(stock)
      .then((response) => {
        navigate("/user");
        window.location.reload(true);
        console.log(stock);
      })
      .catch((error) => {
        console.log(stock);
        console.log("error");
      });
  };

  const reset = (e) => {
    e.preventDefault();
    setStock({
      ticker: "",
      companyName: "",
      initialPrice: "",
      marketCapitalisation: "",
    });
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-bold font-center text-2xl tracking-wider">
          <h1>Create New Stock</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Ticker
          </label>
          <input
            type="text"
            name="ticker"
            value={stock.ticker}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Company Name
          </label>
          <input
            type="text"
            name="companyName"
            value={stock.companyName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Initial Price
          </label>
          <input
            type="number"
            name="initialPrice"
            value={stock.initialPrice}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Market Capitalisation
          </label>
          <input
            type="number"
            name="marketCapitalisation"
            value={stock.marketCapitalisation}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={saveStock}
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6"
          >
            Save
          </button>
          <button
            onClick={reset}
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6"
          >
            Clear
          </button>
          <button
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6"
            onClick={() => navigate("/user")}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateStock;
