import React from 'react'
import "../App.css"
function Card() {
  return (
   <>
    <div className=' m-4 h-fit flex flex-col align-middle justify-center items-center'>

    <div className="bg-zinc-50 max-w-[80%]  wrapper border-1 rounded-lg flex border-white flex-col  p-8"> 

       <div className="date_time flex justify-between"><p className='text-zinc-700'>00/00/000</p>
       <p className='text-zinc-700'>00:00:00</p></div>
       <div className='border-amber-50 w-1/2  self-center max-w-fit pb-6'>
       <h1 className='text-4xl w-fit font-semibold'>Title</h1>
       </div>


      <div className='min-w-full  border-amber-50 w-1/2'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eos soluta placeat ad id alias voluptates porro voluptatem rerum eveniet natus reiciendis ullam veniam, nihil ab necessitatibus molestiae inventore repudiandae?</p>
      </div>


      <div className='utils_area flex gap-5 justify-end  border-amber-50 pt-4'>
      <button className='border-1 rounded-lg px-1 py-0.5 text-center bg-blue-400'>Edit</button>
      <button className='border-1 rounded-lg px-1 py-0.5 text-center bg-red-500'>Delete</button>
      </div>


      <div className='border-amber-50 w-1/2'></div>
      
      </div>
      
    </div>
   </>
  )
}

export default Card