const mongoose = require("mongoose");

const productTransactionsSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  price: Number,
  category: String,
  dateOfSale: Date,
  sold: Boolean,
});

const productTransactions = mongoose.model(
  "ProductTransactions",
  productTransactionsSchema
);

module.exports = productTransactions;
