import React, { use, useEffect, useState } from 'react'

import useTodoStore from '../../store/todoStore'
import Card from '../components/card'
import Loader from '../components/Loader'
function Home() {
    const {todoList,getTodolist,getDelRes,isDeleting,getData} = useTodoStore()
    useEffect(()=>{
        getTodolist()
        
    },[])
    
  return (
    
       <>
       {isDeleting && (
            <div className='absolute bg-[#0000004a] w-full h-svh flex items-center justify-center top-0 left-0'>
                <Loader />
            </div>
        )}
      {
        getData ? 
     todoList.data.map((dat)=>(
        <>
        <Card data={dat} />
        </>
     ))
        : <div className='absolute bg-[#4747475a] w-full h-svh flex items-center scroll- justify-center m-0 top-0'>
      <Loader></Loader>
     </div>
       }
       </>
  )
}

export default Home