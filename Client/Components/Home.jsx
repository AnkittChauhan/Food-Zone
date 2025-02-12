import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MenuLogo from '../src/assets/HomeLogo.png'
import { Toaster, toast } from 'sonner';
import { useUser } from "@clerk/clerk-react";

const Home = () => {
  
  const navigate = useNavigate();
  const [ token , setToken ] = useState('');
  const { isSignedIn } = useUser();
  

  useEffect(() => {
    setToken(localStorage.getItem("Token")); 
    });

  const handleOrderNow = () => {
    
    isSignedIn?navigate('/Menu'):toast.warning('Please Login/SignUp first') 
  }  
  
  
  

  return (
    <>
        <div className='mt-24 display: flex'>
          <img src={MenuLogo}/>
            <div className='flex-row-reverse pt-24'>
                <h1 className='text-4xl font-sans ml-16'>Are You</h1>
                <h1 className='text-8xl text-red-600 font-scratch -mt-5 -ml-6'>Hungry?</h1>
                <button onClick={ handleOrderNow }  className='bg-green-400 text-white text-xl tracking-widest w-48 h-9 mt-8 ml-7 rounded-lg hover:bg-green-300 active:bg-green-400 active:scale-x-110 scale-y-105 transition-all'>Order Now</button>
                <Toaster position="top-center" expand={false} richColors />
            </div>
        </div>
        
    </>
  )
}

export default Home