const axios = require("axios");
const productTransactions = require("../model/productSchema");
const initializeDatabase = async () => {
  try {
    const response = await axios.get(
      "https://s3.amazonaws.com/roxiler.com/product_transaction.json"
    );
    const transactions = response.data;
    await productTransactions.insertMany(transactions);
    console.log("Database initialized with seed data");
  } catch (error) {
    console.error("Error initializing database:", error);
  }
};

module.exports = initializeDatabase;
