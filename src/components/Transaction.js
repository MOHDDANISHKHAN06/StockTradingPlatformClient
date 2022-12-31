import React from "react";

const Transaction = ({ transaction }) => {
  return (
    <tr>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">
          {transaction.transactionType}
        </div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">
          {transaction.transactionAmount}
        </div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{transaction.date}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{transaction.time}</div>
      </td>
    </tr>
  );
};

export default Transaction;
