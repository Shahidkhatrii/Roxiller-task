import React from "react";

const TransactionTable = ({ transactions }) => {
  return (
    <div className="overflow-x-auto">
      {transactions.length === 0 ? (
        <div className="text-center py-4">
          <p className="text-gray-500">
            No transactions found for the selected month or search term.
          </p>
        </div>
      ) : (
        <table className="table-auto w-full rounded-t-xl bg-customYellow text-lg">
          <thead>
            <tr>
              <th className=" px-4 py-2">ID</th>
              <th className="border-x-2 px-4 py-2">Title</th>
              <th className="border-x-2 px-4 py-2">Description</th>
              <th className="border-x-2 px-4 py-2">Price</th>
              <th className="border-x-2 px-4 py-2">Category</th>
              <th className="px-4 py-2">Sold</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="border-y-2 px-4 py-2">{transaction.id}</td>
                <td className="border-2 px-4 py-2">{transaction.title}</td>
                <td className="border-2 px-4 py-2">
                  {transaction.description}
                </td>
                <td className="border-2 px-4 py-2">{transaction.price}</td>
                <td className="border-2 px-4 py-2">{transaction.category}</td>
                <td className="border-y-2 px-4 py-2">
                  {transaction.sold ? "Yes" : "No"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TransactionTable;
