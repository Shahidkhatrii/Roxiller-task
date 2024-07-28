import React from "react";

const Statistics = ({ statistics, month }) => {
  console.log(statistics);
  return (
    <div>
      <div className="mt-32 bg-yellow-100 p-4 rounded">
        <h2 className="text-4xl font-bold">
          Statistics -{" "}
          {new Date(0, month - 1).toLocaleString("default", { month: "long" })}
          <sup className="text-lg font-normal ml-2">
            (selected month name from dropdown)
          </sup>
        </h2>
        <div className="flex gap-8 mt-8 ml-2 text-lg py-5 px-3 rounded-2xl bg-customYellow w-fit font-medium">
          <div className="flex-col">
            <p className="p-1">Total sale</p>
            <p className="p-1">Total sold items</p>
            <p className="p-1">Total not sold items</p>
          </div>
          <div className="flex-col">
            <p className="p-1">{statistics.totalSaleAmount}</p>
            <p className="p-1">{statistics.totalSoldItems}</p>
            <p className="p-1">{statistics.totalNotSoldItems}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
