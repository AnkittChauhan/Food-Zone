import React from "react";
import { Button, Avatar } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function PreLoginNavbar() {

   const navigate = useNavigate();

  const handleSignIn = () => {
      navigate('/SignIn')
  }

  const handleSignUp = () => {
    navigate('/SignUp')
}

const handleHome = () => {
  navigate('/')
}


  return (
    <div className="bg-green-400 h-16 flex">
         <div>
           <Avatar onClick={handleHome} className="mx-4" src="./src/assets/Presentation1-removebg-preview (1).png" size="lg" />
         </div>
         <h1 className="mx-auto my-auto font-Common text-3xl text-white">
            Food-Zone
         </h1>
         <div className="space-x-2 py-2 px-2">
           <Button onClick={ handleSignIn } className="bg-black px-3 py-2 rounded-xl text-white">
             LogIn
           </Button>
           <Button onClick={ handleSignUp }  className="bg-black px-3 py-2 rounded-xl text-white">
            SignUp
           </Button>
         </div>
    </div>
  );
}
