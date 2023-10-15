import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/header/header";
import { useDispatch, useSelector } from "react-redux";
import todoApi from "./services/todoApi.js";
import { addTodo } from "./Store/todoSlice.js";
import userApi from "./services/userApi";
import { login } from "./Store/userSlice";

export default function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todoId = useSelector((state) => state.user.userData?.todo_id);

  useEffect(() => {
    userApi.getCurrentUser("/current-user").then((response) => {
      if (response.status == "ok") {
        dispatch(login({ userData: response.user }));
      }
    });
    if (todoId) {
      todoApi.getTodos("get_todos", { todo_id: todoId }).then((response) => {
        if (response.status === "ok") {
          if (response.todos.length > 0) {
            dispatch(addTodo({ todos: response.todos }));
          }
        } else {
          console.log(response.message);
        }
      });
    } else {
      navigate("/login");
    }
  }, [todoId]);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
