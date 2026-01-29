const express = require("express");
const Student = require('../models/student.js');
const router = express.Router();



// CREATE
const createStud = async (req, res) => {
  try {
    // console.log("REQ BODY 👉", req.body);
    const { name, email, age, department } = req.body;

    if (!name || !email || !age || !department) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const curEmail = await Student.findOne({ email });

    if (curEmail) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newStud = Student.create({ name, email, age, department });
    // await newStud.save();

    res.status(201).json({
      message: "Student created successfully",
      student: newStud
    });

  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
};

// READ
const getStud = async (req, res) => {
  try {
    const studs = await Student.find();
    res.status(200).json({ Students: studs });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Server side error" });
  }
};

// UPDATE
const updateStud = async (req, res) => {
  try {
    const { name, email, age, department } = req.body;

    const curStud = await Student.findOne({ email });

    if (!curStud) {
      return res.status(400).json({ message: "User doesn't exist" });
    }

    await Student.findOneAndUpdate(
      { email },
      { name, age, department },
      { new: true }
    );

    res.status(200).json({ message: "Updated successfully" });

  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Server side error" });
  }
};

// DELETE
const deleteStud = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email required" });
    }

    await Student.deleteOne({ email });
    res.status(200).json({ message: "Deleted successfully" });

  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Server side error" });
  }
};

module.exports = { createStud, getStud, updateStud, deleteStud };
