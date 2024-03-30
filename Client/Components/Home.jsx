import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();
  const handleClick = () => {
    
    navigate('/Menu');
  };
  


  return (
    <>
        <div className='mt-24 display: flex'>
          <img src="https://drive.google.com/file/d/1lCFmjtlZxP5z40soycdHS4MJOor0NnuT/view?usp=sharing"/>
            <div className='flex-row-reverse pt-24'>
                <h1 className='text-4xl font-sans ml-16'>Are You</h1>
                <h1 className='text-8xl text-red-600 font-scratch -mt-5 -ml-6'>Hungry?</h1>
                <button onClick={ handleClick }  className='bg-green-400 text-white text-xl tracking-widest w-48 h-9 mt-8 ml-7 rounded-lg hover:bg-green-300 active:bg-green-400 active:scale-x-110 scale-y-105 transition-all'>Order Now</button>
            </div>
        </div>
        
    </>
  )
}

export default Home