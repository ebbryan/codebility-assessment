const { todos } = require("./todo-in-memory-model.js");

async function getAllTodos() {
  return todos;
}

async function createTodo(payload) {
  return todos.push(payload);
}

module.exports = { getAllTodos, createTodo };
