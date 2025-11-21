import { Router } from "express";
import { createController,editController,deleteController} from "../controllers/todoControllers.js"
const todoRouter  = Router()

todoRouter.post("/create", createController)

todoRouter.post("/edit/:id",editController)
todoRouter.get("/delete/:id",deleteController)

export default todoRouter;