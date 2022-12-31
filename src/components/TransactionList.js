import React from "react";
import Transaction from "./Transaction";
import { useState, useEffect } from "react";
import { UserService } from "../services/UserService";

const TransactionList = () => {
  const [loading, setLoading] = useState(true);
  const [transaction, setTransaction] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await new UserService().getTransaction();
        setTransaction(response.data);
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
              Transaction Type
            </th>
            <th className="text-left font-medium text-white uppercase tracking-wider py-3 px-6">
              Transaction Amount
            </th>
            <th className="text-left font-medium text-white uppercase tracking-wider py-3 px-6">
              Transaction Date
            </th>
            <th className="text-left font-medium text-white uppercase tracking-wider py-3 px-6">
              Transaction Time
            </th>
          </tr>
        </thead>
        {!loading && (
          <tbody className="bg-white">
            {transaction.map((transaction) => (
              <Transaction transaction={transaction}></Transaction>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default TransactionList;
