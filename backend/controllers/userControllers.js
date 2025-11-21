import todoModel from "../models/todoModel.js"
export const signUpController = async (req,res)=>{
    

}
export const loginController = async (req,res)=>{
    
}
//incomplete work.. doing it after i make User Account backend
export const userTodoListController = async (req,res)=>{
    try{
        const todoLists = await todoModel.find();
        res.status(200).json({success:true,data:todoLists})
        
    }
    catch{
        res.status(500).json({success:false,message:"Internal Server Error"})

    }
}