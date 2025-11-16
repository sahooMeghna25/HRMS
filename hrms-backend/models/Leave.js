const mongoose = require("mongoose");

const LeaveSchema = new mongoose.Schema({
  employee: { type: String, required: true },
  from: { type: Date, required: true },
  to: { type: Date, required: true },
  reason: { type: String },
  status: { type: String, enum: ["Pending", "Approved", "Rejected"] },
  appliedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Leave", LeaveSchema);
