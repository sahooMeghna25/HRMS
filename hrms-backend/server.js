const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const app = express();

connectDB();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/employees", require("./routes/employee"));
app.use("/api/leaves", require("./routes/leaves"));

// basic health
app.get("/", (req, res) => res.send("HRMS API running"));
app.listen(PORT, () => {
  console.log(`erver started on ${PORT}`);
});
