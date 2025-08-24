const { todos } = require("./todo-in-memory-model.js");

async function getAllTodos() {
  return todos;
}

module.exports = { getAllTodos };
