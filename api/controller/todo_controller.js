const { ObjectId } = require('mongodb');
const Todo = require('../model/Todo');
const User = require("../model/User");

exports.todoList = async (req, res) => {
    let id = req.userId;
    let user = await User.findOne({ _id: ObjectId(id) });
    if (user != null) {
        let list = await Todo.find({ userId: user.id }).select({
            "title" : 1, 
            "description" : 1,
            "dateTime" : 1,
            "priority" : 1
        });
        return res.status(200).json({
            statusCode: 200,
            status: 1,
            message: "",
            data: list
        });
    } else {
        return res.status(200).json({
            statusCode: 200,
            status: 0,
            message: "Opertation failed"
        });
    }
}

exports.addTodo = async (req, res) => {
    let id = req.userId;
    const { title, description, dateTime, priority } = req.body;

    let user = await User.findOne({ _id: ObjectId(id) });
    if (user != null) {
        let todo = new Todo({
            userId: user.id,
            title: title,
            description: description,
            dateTime: dateTime,
            priority: priority
        });
        todo = await todo.save();
        return res.status(200).json({
            statusCode: 200,
            status: 1,
            message: "Added successfully",
            data: {
                _id: todo.id,
                title: todo.title,
                description: todo.description,
                dateTime: todo.dateTime,
                priority: todo.priority
            }
        });
    } else {
        return res.status(200).json({
            statusCode: 200,
            status: 0,
            message: "Opertation failed"
        });
    }
}

exports.deleteTodo = async (req, res) => {
    let id = req.userId;
    const { todoId } = req.body;

    let user = await User.findOne({ _id: ObjectId(id) });
    if (user != null) {
        let todo = await Todo.deleteOne({ _id: ObjectId(todoId), userId: user.id });
        if (todo.deletedCount === 1) {
            return res.status(200).json({
                statusCode: 200,
                status: 1,
                message: "Deleted successfully"
            });
        } else {
            return res.status(200).json({
                statusCode: 200,
                status: 0,
                message: "Opertation failed"
            });
        }
    } else {
        return res.status(200).json({
            statusCode: 200,
            status: 0,
            message: "Opertation failed"
        });
    }
}

exports.updateTodo = async (req, res) => {
    let id = req.userId;
    const { todoId, title, description, dateTime, priority } = req.body;

    let user = await User.findOne({ _id: ObjectId(id) });
    if (user != null) {
        let todo = await Todo.findOne({ _id: ObjectId(todoId), userId: user.id });

        if(todo != null){
            todo.title = title;
            todo.description = description;
            todo.dateTime = dateTime;
            todo.priority = priority;
    
            todo = await todo.save();
    
            return res.status(200).json({
                statusCode: 200,
                status: 1,
                message: "Updated successfully",
                data: {
                    _id: todo.id,
                    title: todo.title,
                    description: todo.description,
                    dateTime: todo.dateTime,
                    priority: todo.priority
                }
            });
        }else{
            return res.status(200).json({
                statusCode: 200,
                status: 0,
                message: "Opertation failed"
            });
        }
    } else {
        return res.status(200).json({
            statusCode: 200,
            status: 0,
            message: "Opertation failed"
        });
    }
}

