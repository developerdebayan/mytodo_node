const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const todoSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dateTime: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Todo",todoSchema);
