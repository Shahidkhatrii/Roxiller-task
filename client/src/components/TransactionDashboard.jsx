import React, { useState, useEffect } from "react";
import TransactionTable from "./TransactionTable";
import Pagination from "./Pagination";
import appApi from "../api/appApi";
import Statistics from "./Statistics";

import BarChartContainer from "./BarChartContainer";

const TransactionDashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");
  const [month, setMonth] = useState("3"); // Default to March
  const [page, setPage] = useState(1);
  const [perPage] = useState(10);
  const [statistics, setStatistics] = useState({
    totalSales: 0,
    totalSoldItems: 0,
    totalNotSoldItems: 0,
  });
  const [priceRangeData, setPriceRangeData] = useState({
    "0-100": 0,
    "101-200": 0,
    "201-300": 0,
    "301-400": 0,
    "401-500": 0,
    "501-600": 0,
    "601-700": 0,
    "701-800": 0,
    "801-900": 0,
    "901-above": 0,
  });

  useEffect(() => {
    fetchTransactions();
    fetchStatistics();
    fetchPriceRangeData();
  }, [month, page, search]);

  const fetchTransactions = async () => {
    try {
      const response = await appApi.get(`transactions`, {
        params: {
          month: month,
          search: search,
          page: page,
          perPage: perPage,
        },
      });
      setTransactions(response.data);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };
  const fetchStatistics = async () => {
    try {
      const response = await appApi.get(`statistics/${month}`);
      setStatistics(response.data);
    } catch (error) {
      console.error("Error fetching statistics:", error);
    }
  };

  const fetchPriceRangeData = async () => {
    try {
      const response = await appApi.get(`barChart/${month}`);
      setPriceRangeData(response.data);
    } catch (error) {
      console.error("Error fetching price range data:", error);
    }
  };
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(1); // reset page
  };

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
    setPage(1); // reset page
  };

  return (
    <div className="container min-h-screen mx-auto bg-sky-50 px-72 py-4 pb-40 shadow rounded bg-customSkyBlue">
      <div className="flex justify-center p-5">
        <h1 className="text-3xl font-bold mb-4 self-center bg-white px-8 py-16 rounded-full">
          Transaction
          <br /> Dashboard
        </h1>
      </div>
      <div className="flex mb-10 justify-between">
        <input
          type="text"
          placeholder="Search transaction"
          value={search}
          onChange={handleSearchChange}
          className="p-2 rounded-xl mr-2 w-1/3 bg-customYellow text-lg"
        />
        <select
          value={month}
          onChange={handleMonthChange}
          className=" p-2 rounded w-1/3 bg-activeYellow text-lg font-medium"
        >
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
      </div>
      <TransactionTable transactions={transactions} />
      <Pagination
        page={page}
        setPage={setPage}
        totalItems={transactions.length}
        perPage={perPage}
      />
      <Statistics statistics={statistics} month={month} />
      <BarChartContainer priceRangeData={priceRangeData} month={month} />
    </div>
  );
};

export default TransactionDashboard;
