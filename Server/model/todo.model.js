import { Schema, model } from "mongoose";

const todoSchema = new Schema({
  todo_id: {
    type: String,
    required: true,
  },

  todos: [
    {
      id: {
        type: String,
        required: true,
      },
      todo: {
        type: String,
        required: true,
        trim:true
      },
    },
  ],
});

const todoModel=new model("Todo", todoSchema);

export default todoModel;
