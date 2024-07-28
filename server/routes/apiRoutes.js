const express = require("express");
const { statistics } = require("../controllers/statisticsController");
const { transactions } = require("../controllers/transactionsController");
const { barChart } = require("../controllers/barChartController");
const { pieChart } = require("../controllers/pieChartController");
const { combinedData } = require("../controllers/combinedController");
const Router = express.Router();

Router.route("/transactions").get(transactions);
Router.route("/statistics/:month").get(statistics);
Router.route("/barChart/:month").get(barChart);
Router.route("/pieChart/:month").get(pieChart);
Router.route("/combinedData/:month").get(combinedData);
module.exports = Router;
