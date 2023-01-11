const TaskModel = require("../models/TaskModel");

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await TaskModel.find({});
    res.status(200).json({ tasks: allTasks });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getTask = async (req, res) => {
  try {
    const { id: idTask } = req.params;
    const task = await TaskModel.findOne({ _id: idTask });
    if (!task) {
      res.status(404).json({ message: ` Cannot find task with id ${idTask}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await TaskModel.create(req.body);
    res.status(201).json({
      message: "Successfully Created Task!",
      data: task,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: idTask } = req.params;
    const task = await TaskModel.findOneAndUpdate({ _id: idTask }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      res.status(404).json({ message: ` Cannot find task with id ${idTask}` });
    }
    res.status(200).json({
      message: "Successfully Update Task!",
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: idTask } = req.params;
    const task = await TaskModel.findOneAndDelete({ _id: idTask });
    if (!task) {
      res.status(404).json({ message: ` Cannot find task with id ${idTask}` });
    }
    res.status(200).json({
      message: "Successfully Delete Task!",
      data: task,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
