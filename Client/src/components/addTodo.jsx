import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import todoApi from "../services/todoApi";
import { addTodo2} from "../Store/todoSlice";
import {v4} from "uuid";
import clickAudio from "../../src/assets/click-button-140881.mp3"

export default function AddTodo() {
  
  const [input, setInput] = useState('')
  const id=v4();
  const userData = useSelector((state) => state.user.userData);
  const dispatch=useDispatch()

   const addTodoHandler = (e) => {
    e.preventDefault();
    todoApi.addTodo("add_todo",{ todo_id:userData.todo_id,text:input,id})
      .then((response) => {
        if (response.status ==="ok") {
          const todo={todo:input,id}
          dispatch(addTodo2({todo}))
          setInput("");
        }else{
          alert(response)
        }
      });
  };

  //play on click on addTodo button
  const playSound = () => {
    if(input.length>0){
      const audio = new Audio(clickAudio);
      audio.play();}
};
  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12 flex justify-center">
     <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange= {(e) => setInput(e.target.value)}
        required
      />
      <button
        type="submit"
        onClick={playSound}
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  );
}
