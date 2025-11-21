import { Router } from "express";
import { loginController, signUpController,userTodoListController } from "../controllers/userControllers.js";


const userRouter = Router()

userRouter.get("/login",loginController)
userRouter.get("/signUp",signUpController)
userRouter.get("/todoLists",userTodoListController)
export default userRouter;