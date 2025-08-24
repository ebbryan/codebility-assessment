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

async function updateTodo(id, data) {
  const index = todos.findIndex((todo) => todo.id === id);
  if (index === -1) {
    throw new Error("Todo not found");
  }

  todos[index] = {
    ...todos[index],
    ...data,
    updatedAt: new Date().toISOString(),
  };
  return todos[index];
}

async function deleteTodo(id) {
  const index = todos.findIndex((todo) => todo.id === id);
  if (index === -1) {
    throw new Error("Todo not found");
  }
  const deletedTodo = todos.splice(index, 1);
  return deletedTodo[0];
}

module.exports = { getAllTodos, createTodo, updateTodo, deleteTodo };
