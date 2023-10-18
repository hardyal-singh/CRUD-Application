import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../Store/userSlice.js";
import { useNavigate } from "react-router-dom";
import userApi from "../../services/userApi.js";
import { removeTodos } from "../../Store/todoSlice.js";

export default function LogoutBtn() {
  const dispatch = useDispatch();
  const Navigate=useNavigate()
  

  
  const logoutHandler=()=> {
    userApi.logout("/logout").then((Response)=>{
      if(Response.status="ok"){
        dispatch(logout())
        dispatch(removeTodos())
      }
    })
  };
  
  return (
    <button type="button"
    className="inline-bock px-6 py-2 duration-200 hover:bg-blue-700 hover:text-white rounded-full"
    onClick={logoutHandler}>
      Logout
    </button>
  );
}
