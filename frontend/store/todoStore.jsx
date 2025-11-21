import {create} from "zustand"

import axios from "axios"

const utils_backgorund = "http://localhost:3000/todoList/";
const user_backend ="http://localhost:3000/user/";
const todoStore = (set)=>({
    todoList: [],
    getData: false,
    isDeleting :false,

    
    getTodolist : async ()=>{
        try{
            const res  = await axios.get(user_backend+"todoLists")
        set({todoList:res.data,getData:true})
        }
        catch{
            set({todoList:[],getData:false})
        }
    },
    deleteTodo : async(id)=>{
        set({isDeleting:true})
        try{
                     
            await axios.get(utils_backgorund+"delete/"+id).then(()=>(set({isDeleting:false})))
            set({isDeleting:false})

        }
        catch{
            console.error(err)
            set({isDeleting:false})

        }
        finally{
            set({ isDeleting:false })
        }

}
})
const useTodoStore = create(todoStore)

export default useTodoStore