const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDb = require("./config/dbConnection");
const initializeDatabase = require("./config/initializeDb");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/apiRoutes");
dotenv.config();
connectDb();

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use("/api", apiRoutes);
app.get("/initializeDb", (req, res) => {
  try {
    initializeDatabase();
    res.status(200).json("Success");
  } catch (err) {
    res.status(500);
  }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
