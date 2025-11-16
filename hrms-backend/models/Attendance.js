const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema({
  employee: { type: String, required: true },
  date: { type: String, required: true },
  checkInTime: { type: Date, required: Date.now },
});

// unique index to prevent duplicate attendance per day
AttendanceSchema.index({ employee: 1, date: 1 }, { unique: true });

module.exports = mongoose.model("Attendance", AttendanceSchema);
