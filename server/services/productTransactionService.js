const productTransactions = require("../model/productSchema");

const getStatistics = async (month) => {
  const transactions = await productTransactions.aggregate([
    {
      $project: {
        month: { $month: "$dateOfSale" },
        price: 1,
        sold: 1,
      },
    },
    {
      $match: { month },
    },
  ]);
  const totalSaleAmount = transactions.reduce((sum, t) => {
    if (t.sold) {
      return sum + t.price;
    }
    return sum;
  }, 0);
  const totalSoldItems = transactions.filter((t) => t.sold).length;
  const totalNotSoldItems = transactions.length - totalSoldItems;
  return {
    totalSaleAmount,
    totalSoldItems,
    totalNotSoldItems,
  };
};

const getBarChart = async (month) => {
  const transactions = await productTransactions.aggregate([
    {
      $project: {
        month: { $month: "$dateOfSale" },
        price: 1,
      },
    },
    {
      $match: { month },
    },
  ]);

  const priceRanges = {
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
  };
  const rangeMapping = [
    { label: "0-100", min: 0, max: 100 },
    { label: "101-200", min: 101, max: 200 },
    { label: "201-300", min: 201, max: 300 },
    { label: "301-400", min: 301, max: 400 },
    { label: "401-500", min: 401, max: 500 },
    { label: "501-600", min: 501, max: 600 },
    { label: "601-700", min: 601, max: 700 },
    { label: "701-800", min: 701, max: 800 },
    { label: "801-900", min: 801, max: 900 },
    { label: "901-above", min: 901, max: Infinity },
  ];
  transactions.forEach((t) => {
    const range = rangeMapping.find(
      (r) => t.price >= r.min && t.price <= r.max
    );
    if (range) {
      priceRanges[range.label]++;
    }
  });

  return priceRanges;
};
const getPieChart = async (month) => {
  const transactions = await productTransactions.aggregate([
    {
      $project: {
        month: { $month: "$dateOfSale" },
        category: 1,
      },
    },
    {
      $match: { month },
    },
  ]);
  const categories = {};
  transactions.forEach((t) => {
    if (!categories[t.category]) categories[t.category] = 0;
    categories[t.category]++;
  });
  return categories;
};
module.exports = { getStatistics, getBarChart, getPieChart };
