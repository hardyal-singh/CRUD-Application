import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../Store/userSlice.js";
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom";

export default function LogoutBtn() {
  const dispatch = useDispatch();
  const Navigate=useNavigate()
  

  
  const logoutHandler=async()=> {
    await Cookies.remove("user_token",{path:"/"})
    dispatch(logout())
  };
  
  return (
    <button type="button"
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' 
    onClick={logoutHandler}>
      Logout
    </button>
  );
}
