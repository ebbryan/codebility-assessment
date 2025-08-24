const { todoId } = require("./todo-in-memory-model.js");
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
    const initialPayload = req.body;
    const payload = { id: todoId++, ...initialPayload };
    const response = await todoService.createTodo(payload);
    return res.json({ data: response, success: true });
  } catch (error) {
    return res.status(500).json({ message: error.message, success: false });
  }
}

module.exports = { getAllTodos, createTodo };
