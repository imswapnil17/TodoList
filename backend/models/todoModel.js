import mongoose from "mongoose";
const todoSchema = mongoose.Schema({
    "title" : {type:String,required:true},
    "content" : {type:String,required:true},
    "doc" : {type:Date,required:true},
    "createdBy" : {type:String,required:true},
    "toc" : {type:String,required:true},

})

const todoModel = mongoose.model("todo_data",todoSchema)
export default todoModel;