import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv"

dotenv.config()

const app=express();

   console.log(process.env.FRONTEND_URL)
const corsOptions = {
    origin:process.env.FRONTEND_URL, // Specify your frontend application's origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
    optionsSuccessStatus: 204, // Some legacy browsers (IE11, various SmartTVs) choke on 204
  };
            //access-control-allow-credentials:true

//middleware here
app.use(express.json())
app.use(cors(corsOptions))
app.use(cookieParser())

//import routers here...
import { userRouter } from "./routes/user.routes.js";
import { todoRouter } from "./routes/todo.routes.js";

app.use("/api/v1/user",userRouter);
app.use("/api/v1/todo",todoRouter);

export default app;