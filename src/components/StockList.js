import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StockService } from "../services/StockService";
import Stock from "./Stock";

const StockList = () => {
  const navigate = useNavigate();
  const [stock, setStocks] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await new StockService().getStocks();
        setStocks(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto my-8">
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
            <th className=" Display:none text-left font-medium text-white uppercase tracking-wider py-3 px-6">
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
    </div>
  );
};

export default StockList;
