const mongoose = require("mongoose");
const user = mongoose.model("User",new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minlengh: 5,
        maxlengh: 50,
    },
    
    email: {
        type: String,
        require: true,
        unique: true,
    },

    password: {
        type: String,
        require: true,
        minlengh: 5,
        maxlengh: 1024,
    }
}));

module.exports = user;