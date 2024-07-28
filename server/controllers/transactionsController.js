const asyncHandler = require("express-async-handler");
const productTransactions = require("../model/productSchema");
const transactions = asyncHandler(async (req, res) => {
  try {
    const { page = 1, perPage = 10, search = "", month = 3 } = req.query;
    const regex = new RegExp(search, "i");
    const monthNumber = parseInt(month);
    const searchNumber = parseFloat(search);
    if (isNaN(monthNumber) || monthNumber < 1 || monthNumber > 12) {
      return res.status(400).json({ error: "Invalid month" });
    }

    let searchCriteria = [{ title: regex }, { description: regex }];

    if (!isNaN(searchNumber)) {
      searchCriteria.push({ price: searchNumber });
    }
    const transactions = await productTransactions
      .find({
        $expr: {
          $eq: [{ $month: "$dateOfSale" }, monthNumber],
        },
        $or: searchCriteria,
      })
      .skip((page - 1) * perPage)
      .limit(perPage);
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: "Error fetching transactions" });
  }
});
module.exports = { transactions };
