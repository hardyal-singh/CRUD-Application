import mongoose from "mongoose";
mongoose.set("strictQuery", false);

export const connection=()=>{mongoose.connect(process.env.MONGO_URI).then((status)=>{
    console.log(`Mongo:database connection established successfully`)
})}