const Leave = require("../models/Leave");

exports.applyLeave = async (req, res) => {
  try {
    const { from, to, reason } = req.body;
    const leave = new Leave({ employee: req.user.id, from, to, reason });
    await leave.save();
    res.status(201).json({ msg: "Leave applied", leave });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

exports.getLeavesForAdmin = async (req, res) => {
  try {
    const leaves = await Leave.find().populate("employee", "name email");
    res.json(leaves);
  } catch (error) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};

exports.updateLeaveStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const leave = await Leave.findById(id);
    if (!leave) return res.status(404).json({ msg: "Leave not found" });
    leave.status = status;
    await leave.save();
    res.json({ msg: "Status updated", leave });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};
