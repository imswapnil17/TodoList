import todoModel from "../models/todoModel.js"

export const createController = async (req, res) => {
    try {


        let { title, content, doc, createdBy, toc } = req.body
        if ((!title || !content || !doc || !createdBy || !toc)) {
            res.status(400).json({ success: "false", message: "Required details missing" })
        }
        else {
            let newTodo = await todoModel.create(
                {
                    title,
                    content,
                    doc,
                    createdBy,
                    toc
                }

            )
            res.status(200).json({ success: "true", data: newTodo })
        }
    }
    catch {
        res.status(500).json({ success: "false", data: null })
    }

}

export const editController = async (req,res)=>{
    
    try{
        const searched_Id = req.params.id
        const findTodo = todoModel.findById(searched_Id);
        if(!findTodo){
            
            res.status(400).json({success:"false",message:"No user found",data:req.params.id})
        }
        else{
            let {title,content,doc,createdBy,toc} = req.body
            let updatedTodo = await todoModel.findByIdAndUpdate(searched_Id,{$set:{title,content,doc,createdBy,toc}},{new:true})
            res.status(200).json({success:"true",data:updatedTodo})
        }
        
    }
    catch{
        res.status(500).json({success:"false",message:"Internal Server Error"})
    }
}

export const deleteController = async (req,res)=>{
    try{
        let searched_Id = req.params.id
        const findTodo = todoModel.findById(searched_Id)
        if(!findTodo){res.status(400).json({success:"false",message:"No Todo found"})}
        else{
            await todoModel.findByIdAndDelete(searched_Id)
        }
        res.status(200).json({success:'true',message:"Data Deleted"})
        
    }
    catch{
        res.status(500).json({success:"false",message:"Internal Server Error"})
    }
}