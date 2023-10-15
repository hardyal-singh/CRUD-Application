import mongoose from "mongoose";


export const connection=()=>{mongoose.connect(process.env.MONGO_URI).then((status)=>{
    console.log(`Mongo:database connection established successfully`)
})}