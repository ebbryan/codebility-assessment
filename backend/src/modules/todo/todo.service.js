const { v4: uuidv4 } = require("uuid");
const { dayjs } = require("dayjs");
const { todos } = require("./todo-in-memory-model.js");

async function getAllTodos() {
  return todos;
}

async function createTodo(data) {
  const payload = {
    id: uuidv4(),
    ...data,
    completed: false,
    createdAt: new Date().toISOString(),
  };
  todos.push(payload);
  return payload;
}

module.exports = { getAllTodos, createTodo };
