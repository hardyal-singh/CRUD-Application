import express from "express";
const todoRouter=express.Router();

// import controllres here..
import {getTodos,deleteTodo, addTodo} from "../controllers/todo.contro.js";




todoRouter.post("/get_todos",getTodos);
todoRouter.post("/add_todo",addTodo)
todoRouter.delete("/remove_todo",deleteTodo)
//userRouter.post("/deleteTodo",deleteTodo)


export {todoRouter}