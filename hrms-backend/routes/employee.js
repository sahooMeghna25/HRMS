const express = require("express");
const router = express.Router();
const {
  createEmployee,
  getAllEmployees,
} = require("../controllers/employeeController");
const { auth, authorize } = require("../middleware/auth");

router.post("/", auth, authorize("Admin"), createEmployee);
router.get("/", auth, authorize("Admin"), getAllEmployees);

module.exports = router;
