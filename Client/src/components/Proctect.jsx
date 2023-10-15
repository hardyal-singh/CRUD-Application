import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {  useNavigate } from 'react-router-dom'


export default function Proctect( {authentication="true",children}) {

const navigate=useNavigate()
const userStatus=useSelector(state=>state.user.status);

    useEffect(()=>{
      if(authentication && userStatus!==authentication){
        navigate("/login")
      }else if(!authentication && userStatus!==authentication){
        navigate("/")
      }
    },[navigate,authentication,userStatus])
  return <>{children}</>
}
