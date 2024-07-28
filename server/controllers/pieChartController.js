const asyncHandler = require("express-async-handler");
const { getPieChart } = require("../services/productTransactionService");
const pieChart = asyncHandler(async (req, res) => {
  const month = parseInt(req.params.month, 10);
  if (isNaN(month) || month < 1 || month > 12) {
    return res.status(400).json({ message: "Invalid month" });
  }

  const pieChart = await getPieChart(month);
  res.status(200).json(pieChart);
});
module.exports = { pieChart };
