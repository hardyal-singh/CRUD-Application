import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv"
import compression from "compression"
import helmet from "helmet";
import RateLimit from "express-rate-limit";
dotenv.config()

const app=express();

app.get("/",(req,res)=>{
  res.json("hello Dost");
})

const limiter = RateLimit({
   windowMs: 1 * 60 * 1000, // 1 minute
   max:50,
   message: 'Too many requests from this IP, please try again later.'
 });

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
app.use(compression())
app.use(limiter);  // Apply the limiter to all requests

app.use(
   helmet.contentSecurityPolicy({
     directives: {
       "script-src": ["'self'", "code.jquery.com", "cdn.jsdelivr.net"],
     },
   }),
 );




//import routers here...
import { userRouter } from "./routes/user.routes.js";
import { todoRouter } from "./routes/todo.routes.js";

app.use("/api/v1/user",userRouter);
app.use("/api/v1/todo",todoRouter);

export default app;