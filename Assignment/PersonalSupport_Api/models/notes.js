const mongoose = require("mongoose");
const Scheme = mongoose.Schema;

const Notes = new Scheme({
  userId: { type: Scheme.Types.ObjectId, ref: "user", require: true },
  date: { type: String },
  content: { type: String },
});

module.exports = mongoose.model("note", Notes);
