import express from "express";
const userRouter=express.Router();

// import controllres here..
import {getUser,userLogin,userSignup} from "../controllers/user.contro.js";


//import middleware here..
import { isLogin } from "../middlewares/auth.middleware.js";

userRouter.get("/current-user",isLogin,getUser);
userRouter.post("/signup",userSignup)
userRouter.post("/login",userLogin)

export {userRouter}