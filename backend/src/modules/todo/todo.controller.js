const todoService = require("./todo.service.js");

async function getAllTodos(req, res) {
  try {
    const result = await todoService.getAllTodos(req, res);
    return res.json({ data: result, success: true });
  } catch (error) {
    return res.status(500).json({ message: error.message, success: false });
  }
}

module.exports = { getAllTodos };
