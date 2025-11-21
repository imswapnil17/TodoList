import express from "express";
import { ENV_VARS } from "./config/enVars.js";
import cookieParser from "cookie-parser"
import cors from "cors"
import { connectDB } from "./config/db.js";
import todoModel from "./models/todoModel.js";
import todoRouter from "./routes/todoRoutes.js";
import userRouter from "./routes/userRoutes.js";
const app = express()
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const PORT = ENV_VARS.PORT || 3000

app.use("/todoList",todoRouter);
app.use("/user",userRouter);

app.listen(PORT,()=>{console.log("server started");connectDB();})