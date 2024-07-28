const asyncHandler = require("express-async-handler");
const {
  getStatistics,
  getBarChart,
  getPieChart,
} = require("../services/productTransactionService");

const combinedData = asyncHandler(async (req, res) => {
  try {
    const month = parseInt(req.params.month, 10);
    if (isNaN(month) || month < 1 || month > 12) {
      return res.status(400).json({ message: "Invalid month" });
    }
    const statistics = await getStatistics(month);
    const barChart = await getBarChart(month);
    const pieChart = await getPieChart(month);
    res.status(200).json({ statistics, barChart, pieChart });
  } catch (error) {
    res.status(500).json({ message: "Error fetching transactions" });
  }
});
module.exports = { combinedData };
