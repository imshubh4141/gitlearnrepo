const Task = require("../models/Task");

//these functions do not return promises. Mongoose allows this syntax for convenience
const getAllTasks = async (req, res) => {
  try {
    const allTasks = await Task.find();
    res.status(200).json(allTasks);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id).exec();
    console.log(task);
    if (!task) {
      return res
        .status(404)
        .json({ msg: `task with id: ${id} does not exist` });
    }
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const query = { _id: id };
    const update = req.body;
    console.log(req.body);
    const updatedTask = await Task.findOneAndUpdate(query, update, {
      new: true,
      runValidators: true,
    });
    if (!updatedTask) {
      return res
        .status(404)
        .json({ msg: `task with id: ${id} does not exist` });
    }
    res.status(200).json({ updatedTask });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOneAndDelete({ _id: id });
    if (!task) {
      return res
        .status(404)
        .json({ msg: `task with id: ${id} does not exist` });
    }
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
