var express = require("express");
var router = express.Router();

const Users = require("../models/users");
const Notes = require("../models/notes");

// login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Users.findOne({ email: email });
    if (!user) {
      return res.json({
        status: 400,
        message: "user doesn't exist",
        data: [],
      });
    }

    if (user.password !== password) {
      return res.json({
        status: 400,
        message: "password is incorrect",
        data: [],
      });
    }

    return res.json({
      status: 200,
      message: "login successfully",
      data: {
        userId: user._id,
        email: user.email,
        name: user.name,
        avatar: user.avatar,
      },
    });
  } catch (error) {
    return res.json({
      status: 500,
      message: "server error",
      error: error.message,
    });
  }
});

// register
router.post("/register", async (req, res) => {
  const data = req.body;
  try {
    let existingUser = await Users.findOne({ email: data.email });
    if (existingUser) {
      return res.json({
        status: 400,
        message: "email has existed",
      });
    }

    const newUser = new Users({
      email: data.email,
      password: data.password,
      name: data.name,
      avatar: data.avatar,
    });

    const result = await newUser.save();
    if (result) {
      res.json({
        status: 200,
        message: "register successfully",
        data: data,
      });
    } else {
      res.json({
        status: 400,
        message: "register failed",
        data: [],
      });
    }
  } catch (error) {
    console.log("loi server", error.message);
  }
});

// get list notes
router.get("/get-list-notes", async (req, res) => {
  try {
    const notes = await Notes.find();
    res.json({
      notes,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get notes by userId
router.get("/get-notes-by-user/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const notes = await Notes.find({ userId: userId });
    res.json({ notes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// add note
router.post("/add-note", async (req, res) => {
  const data = req.body;
  try {
    const existingNote = await Notes.findOne({ date: data.date });
    if (existingNote) {
      return res
        .status(400)
        .json({ message: "Note for this date already exists" });
    }

    const newNote = new Notes({
      userId: data.userId,
      date: data.date,
      content: data.content,
    });

    const result = await newNote.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// update note
router.put("/update-note/:date", async (req, res) => {
  const { date } = req.params;
  const { userId, content } = req.body;
  try {
    const updatedNote = await Notes.findOneAndUpdate(
      { date, userId },
      { content },
      { new: true }
    );
    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.json(updatedNote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
