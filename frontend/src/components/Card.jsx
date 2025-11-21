import React, { useRef } from 'react'
import "../App.css"
import { redirectDocument, useNavigate } from 'react-router'
import useTodoStore from '../../store/todoStore'
import Loader from './Loader'
// import { redirect } from 'react-router'
function Card({ data }) {
  const cardRef = useRef()
  const { isDeleting, deleteTodo, getTodolist } = useTodoStore()
  const deleteHandler = async () => {
    cardRef.current.classList.add("deleteAnimation")   
    await deleteTodo(data._id)
    await Promise(r=>setTimeout(r,3000))
    cardRef.current.classList.remove("deleteAnimation")

      getTodolist()
    
      }
  return (
    <>
      <div ref={cardRef} className={`m-4 h-fit flex flex-col align-middle justify-center items-center`}>

        <div className="bg-zinc-50 min-w-[80%]  wrapper border-1 rounded-lg flex border-white flex-col   p-8">

          <div className="date_time flex justify-between"><p className='text-zinc-700'>{data.doc}</p>
            <p className='text-zinc-700'>{data.toc}</p></div>
          <div className='border-amber-50 w-1/2  self-center max-w-fit pb-6'>
            <h1 className='text-4xl w-fit font-semibold'>{data.title}</h1>
          </div>


          <div className='min-w-full  border-amber-50'>
            <p>{data.content}</p>
          </div>


          <div className='utils_area flex gap-5 justify-between  border-amber-50 pt-4'>
            <p className='text-[13px] text-zinc-700'>-{data.createdBy}</p>
            <div className='flex gap-5'>
              <button className='border-1 rounded-lg px-1 py-0.5 text-center bg-blue-400 hover:bg-blue-300'>Edit</button>
              <button className='border-1 rounded-lg px-1 py-0.5 text-center bg-red-500 hover:bg-red-400 ' onClick={deleteHandler} >Delete</button>
            </div>
          </div>



        </div>

      </div>
    </>
  )
}

export default Card