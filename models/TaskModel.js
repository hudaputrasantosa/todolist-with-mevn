const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxLength: [20, "max length 20 chacaters "],
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("task", TaskSchema);
