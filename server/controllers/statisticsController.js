const asyncHandler = require("express-async-handler");
const { getStatistics } = require("../services/productTransactionService");

const statistics = asyncHandler(async (req, res) => {
  try {
    const month = parseInt(req.params.month, 10);
    if (isNaN(month) || month < 1 || month > 12) {
      return res.status(400).json({ message: "Invalid month" });
    }
    const statistics = await getStatistics(month);
    res.status(200).json(statistics);
  } catch (error) {
    res.status(500).json({ error: "Error fetching statistics" });
  }
});

module.exports = { statistics };
