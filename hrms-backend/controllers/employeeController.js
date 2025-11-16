const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.createEmployee = async (req, res) => {
  const {
    name,
    email,
    password,
    role = "Employee",
    designation,
    phone,
  } = req.body;
  try {
    let existing = User.findOne({ email });
    if (existing) return res.status(400).json({ msg: "Email already exist" });
    const user = new User({ name, email, password, role, designation, phone });

    //hash password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save;
    res.status(201).json({ msg: "user created", user });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

exports.getAllEmployees = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};
