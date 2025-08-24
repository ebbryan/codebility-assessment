const express = require("express");
const router = express.Router();
const todoController = require("./todo.controller.js");

router.get("/todos", todoController.getAllTodos);

module.exports = router;
