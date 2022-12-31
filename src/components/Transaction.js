import React from "react";

const Transaction = () => {
  return (
    <div className="container mx-auto my-8">
      <table className="min-w-full">
        <thead className="bg-gray-400">
          <tr>
            <th className="text-left font-medium text-white uppercase tracking-wider py-3 px-6">
              Transaction Id
            </th>
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
      </table>
    </div>
  );
};

export default Transaction;
