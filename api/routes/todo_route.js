const express = require("express");
const multer = require('multer');
const TodoController = require("../controller/todo_controller");
const checkAuth = require('../middileware/check_auth');

const router = express.Router();

const upload = multer();

router.get("/todoList",upload.array(),checkAuth,TodoController.todoList);
router.post("/addTodo",upload.array(),checkAuth,TodoController.addTodo);
router.post("/deleteTodo",upload.array(),checkAuth,TodoController.deleteTodo);
router.post("/updateTodo",upload.array(),checkAuth,TodoController.updateTodo);

module.exports = router;