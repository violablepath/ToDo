const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({

    task: {
        type: String,
        unique: true,
        required: true,
    },

    completado: {
        type: Boolean,
        default: false,
    },
});

const todoModel = mongoose.model("Todo", TodoSchema);
module.exports = todoModel;