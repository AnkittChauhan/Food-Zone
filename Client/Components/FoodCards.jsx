import React from 'react'

const FoodCards = () => {

    const url = 'https://i.pinimg.com/736x/da/a4/fe/daa4feaa73c3376e3ebdcfc0531c0a2b.jpg';
    const name = "Pasta";
    const price = 100;
  return (
    <div className='mt-8 justify-items-center'>
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-14 ml-6 gap-y-8'>

            <li>
              <div className='bg-gray-300 h-80 w-56 rounded-3xl shadow-xl'>
                <div className='h-56'><img className='h-full w-full rounded-t-3xl object-fill' src={url} /></div>
                <h1 className='text-2xl font-medium tracking-wider text-center'>Name : {name}</h1>
                <h1 className='font-normal tracking-wider text-center'>Price :₹{price}</h1>
                <button className='bg-green-500 text-white h-8 w-2/3 rounded-md font-medium tracking-wider hover:bg-green-700 focus:transition-colors duration-200 active:scale-95 mx-9'>
                  Add Item
                </button>
              </div>
            </li>
      
        </ul>
      </div>

      


    
  )
}

export default FoodCards