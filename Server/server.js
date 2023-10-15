import express from "express";
import env from "dotenv";
import app from "./app.js"
env.config();

//import files here..
import {connection} from "./conn/conn.js";
const port = process.env.PORT;



app.listen(port, () => {
    console.log(`port:${port}`);
    connection()
  })
 
