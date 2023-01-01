import React from "react";
import Order from "./Order";
import { useEffect, useState } from "react";
import { StockService } from "../services/StockService";
import { LocalDate } from "local-date";

const OrderList = () => {
  const [order, setOrders] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await new StockService().getOrders();
        setOrders(response.data);
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
            List Of Orders
          </p>
        </div>
      </div>
      <table className="min-w-full" aria-sort="Status">
        <thead className="bg-gray-400">
          <tr>
            <th className="text-left font-medium text-white uppercase tracking-wider py-3 px-6">
              Order Id
            </th>
            <th className="text-left font-medium text-white uppercase tracking-wider py-3 px-6">
              Type
            </th>
            <th className="text-left font-medium text-white uppercase tracking-wider py-3 px-6">
              Number of shares
            </th>
            <th
              typeof={LocalDate}
              className="text-left font-medium text-white uppercase tracking-wider py-3 px-6"
            >
              Expiry Date
            </th>
            <th className="text-left font-medium text-white uppercase tracking-wider py-3 px-6">
              Status
            </th>
            <th className="text-left font-medium text-white uppercase tracking-wider py-3 px-6">
              Ticker
            </th>
            <th className="text-left font-medium text-white uppercase tracking-wider py-3 px-6">
              Limit Value
            </th>
            <th className="text-left font-medium text-white uppercase tracking-wider py-3 px-6">
              Action
            </th>
          </tr>
        </thead>
        {!loading && (
          <tbody className="bg-white">
            {order.map((order) => (
              <Order order={order} key={order.id}></Order>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default OrderList;
