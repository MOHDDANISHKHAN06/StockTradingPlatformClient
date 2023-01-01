import { LocalDate } from "local-date";
import React from "react";
import { useNavigate } from "react-router-dom";
import { UserService } from "../services/UserService";

const Order = ({ order }) => {
  const navigate = useNavigate();

  const cancelOrder = (e) => {
    console.log("cancelOrder");
    console.log(order.orderId);
    e.preventDefault();
    new UserService()
      .cancelOrder(order.orderId)
      .then((response) => {
        console.log("navigate");
        console.log(response);
        // navigate("/orders");
        // window.location.reload(true);
      })
      .catch((error) => {
        console.log(order);
        console.log(error);
      });
  };
  return (
    <tr key={order.orderId}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{order.orderId}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{order.orderType}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{order.numOfShares}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div typeof={LocalDate} className="text-sm text-gray-500">
          {order.expiry}
        </div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{order.status}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{order.ticker}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{order.limitValue}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <button
          onClick={cancelOrder}
          className="text-indigo-300 hover:text-indigo-800 px-4 hover:cursor-pointer"
        >
          {" "}
          Cancel{" "}
        </button>
      </td>
    </tr>
  );
};

export default Order;
