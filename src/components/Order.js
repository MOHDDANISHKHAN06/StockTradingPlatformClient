import React from "react";

const Order = ({ order }) => {
  return (
    <tr key={order.id}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{order.id}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{order.orderType}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{order.numOfShares}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{order.expiry}</div>
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
        <a>
          <button className="text-indigo-300 hover:text-indigo-800 px-4 hover:cursor-pointer">
            {" "}
            Cancel{" "}
          </button>
          <button className="text-indigo-300 hover:text-indigo-800 px-4 hover:cursor-pointer">
            {" "}
            Edit{" "}
          </button>
        </a>
      </td>
    </tr>
  );
};

export default Order;
