const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const db = require("./models/");
const user = require("./models/user.js");

app.use(bodyParser.json());

function success(res, payload){
    return res.status(200).json(payload);
}

app.get("/todos", async(req, res, next) => {
    try {
        const todos = await db.Todo.find({});
        return success(res, todos);
    } catch (err) {
        next({status: 400, message: "Falha ao encontrar ToDos"});
    }
});

app.get("/todos", async(req, res, next) => {
    try {
        const id = req.params.id;
        const todo = await db.Todo.find({id:id});
        return success(res, todos);
    } catch (err) {
        next({status: 400, message: "Falha ao encontrar ToDos"});
    }
});

app.post("/todos", async(req,res,next) => {
    try {
        const todo = await db.Todo.create(req.body);
    return success(res, todo);
    } catch (err) {
        next({status: 400, message: "Falha ao criar ToDo"});
    }    
});

app.put("/todos/:id", async(req,res,next) => {
    try {
        const todo = db.Todo.findByIdAndUpdate(req.params.id, req.body,{new:true});
        return success(res, todo);
    } catch (err) {
        next({status: 400, message: "Falha ao atualizar ToDo"});
    }
});

app.delete("/todos/:id", async(req, res, next) => {
    try {
        await db.Todo.findByIdAndRemove(req.params.id);
        success(res, "ToDo deletado");
    } catch (err) {
        next({status: 400, message: "Falha ao deletar o ToDo"});
    }
});

app.use((err, req, res, next) => {
    return res.status(err.status || 400).json({
      status: err.status || 400,
      message: err.message || "there was an error processing request",
    });
  });

app.listen(PORT, () => {
    console.log(`Serividor rodando na porta ${PORT}`);
});