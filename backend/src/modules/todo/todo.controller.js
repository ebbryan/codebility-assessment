const todoService = require("./todo.service.js");

async function getAllTodos(req, res) {
  try {
    const result = await todoService.getAllTodos(req, res);
    return res.json({ data: result, success: true });
  } catch (error) {
    return res.status(500).json({ message: error.message, success: false });
  }
}

async function createTodo(req, res) {
  try {
    const data = req.body;
    const response = await todoService.createTodo(data);

    return res.status(201).json({
      data: response,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message, success: false });
  }
}

async function updateTodo(req, res) {
  try {
    const { id } = req.params;
    const data = req.body;
    const response = await todoService.updateTodo(id, data);
    return res.json({ data: response, success: true });
  } catch (error) {
    if (error.message === "Todo not found") {
      return res.status(404).json({ message: error.message, success: false });
    }
    return res.status(500).json({ message: error.message, success: false });
  }
}

async function deleteTodo(req, res) {
  try {
    const { id } = req.params;
    const response = await todoService.deleteTodo(id);
    return res.json({
      data: response,
      success: true,
      message: "Todo deleted successfully",
    });
  } catch (error) {
    if (error.message === "Todo not found") {
      return res.status(404).json({ message: error.message, success: false });
    }
    return res.status(500).json({ message: error.message, success: false });
  }
}

module.exports = { getAllTodos, createTodo, updateTodo, deleteTodo };
