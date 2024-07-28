const asyncHandler = require("express-async-handler");
const { getBarChart } = require("../services/productTransactionService");
const barChart = asyncHandler(async (req, res) => {
  try {
    const month = parseInt(req.params.month, 10);
    if (isNaN(month) || month < 1 || month > 12) {
      return res.status(400).json({ message: "Invalid month" });
    }
    const barChart = await getBarChart(month);
    res.status(200).json(barChart);
  } catch (error) {
    res.status(500).json({ error: "Error fetching barChart details" });
  }
});
module.exports = { barChart };
