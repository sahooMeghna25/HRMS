const express = require("express");
const router = express.Router();

const {
  applyLeave,
  getLeavesForAdmin,
  updateLeaveStatus,
} = require("../controllers/leaveController");
const { auth, authorize } = require("../middleware/auth");

router.post("/", auth, applyLeave);
router.get("/admin", auth, authorize("Admin"), getLeavesForAdmin);
router.patch("/:id/status", auth, authorize("Admin"), updateLeaveStatus);

module.exports = router;
