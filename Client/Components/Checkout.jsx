import React from 'react'

const Checkout = () => {
  return (
    <>
       
      <div className='bg-gray-200 max-w-max mx-auto my-32 rounded-lg'>
         <u><h1 className='font-semibold text-2xl px-40 py-5'>Billing Details</h1></u>
         <div className='bg-slate-200 mx-4 my-2'>
           <div className='flex'>
             <input type="text" placeholder='First Name' className='rounded-md bg-slate-100 px-4 py-1'/>
             <input type="text" placeholder='Last Name' className='rounded-md bg-slate-100 px-4 py-1 ml-4'/>
           </div>
         </div>


         <div className='bg-slate-200 mx-4 my-4'>
           <div className='flex'>
             <input type="text" placeholder='Country' className='rounded-md bg-slate-100 px-4 py-1'/>
             <input type="text" placeholder='State' className='rounded-md bg-slate-100 px-4 py-1 ml-4'/>
           </div>
         </div>
         <input type="text" placeholder='Full address' className=' rounded-md bg-slate-100 py-1 px-4 w-11/12 mx-4' />
         <button className='bg-green-400 text-center my-4 ml-60 text-white px-4 py-1 rounded-lg hover:bg-green-500 active:bg-green-400 active:scale-x-110 scale-y-105 transition-all'>Order</button>


          
       </div>

    </>
  )
}

export default Checkout