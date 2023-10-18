import { watch } from "fs";
import todoModel from "../model/todo.model.js";

const getTodos = async (req, res) => {
  const { todo_id } = req.body;
  if (!todo_id) {
    return res.status(400).json({ message: "Invalid request" });
  }
  const todo = await todoModel.findOne({ todo_id: todo_id });

  if (todo) {
    return res.status(200).json({ todos: todo.todos, status: "ok" });
  }
  return res.status(400).json({ message: "todo not here.." });
};

const addTodo = async (req, res) => {
  const { todo_id, text, id } = req.body;
  if (!todo_id) {
    res.status(400).json({ message: "Invalid request" });
  }
  const todo = await todoModel.findOne({ todo_id: todo_id });
  if (todo) {
    const todo = await todoModel.updateOne(
      { todo_id },
      { $push: { todos: { todo: text, id } } }
    );

    const newtodo = await todoModel.findOne({ todo_id });
    res.status(200).json({ todos: newtodo.todos, status: "ok" });
  } else if (!todo) {
    const todo = await todoModel.create({
      todo_id,
      todos: [{ todo: text, id }],
    });
    res.status(200).json({ todos: todo.todos, status: "ok" });
  }
};

const deleteTodo = async (req, res) => {
  const { todo_id, id } = req.body;
  const result = await todoModel.updateOne(
    { todo_id },
    { $pull: { todos: { id } } }
  );
  if (result) {
    res
      .status(200)
      .json({ status: "ok", message: "remove todo successfully " });
  } else {
    res.status(400).json({ message: "error" });
  }
};
export { getTodos, addTodo, deleteTodo };
