import mongoose from "mongoose";
import { ENV_VARS } from "./enVars.js";

export const connectDB = async() =>{
    mongoose.connection.on("connected",()=>console.log("database connected" ))
    await mongoose.connect(`${ENV_VARS.MONGO_URI}`)
}