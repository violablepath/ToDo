const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/todo-app", {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{console.log("Server Running")}).catch((err)=>{console.log("Error Running Server")});

mongoose.set("debug", true);
mongoose.Promise = Promise;
module.exports.Todo = require("./todos");