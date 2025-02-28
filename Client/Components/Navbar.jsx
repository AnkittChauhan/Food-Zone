import React from "react";
import { Button, Avatar } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import BrandLogo from "../src/assets/BrandLogo.png"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";



export default function Navbar() {

  const { isSignedIn } = useUser();
  const navigate = useNavigate();


  const handleHome = () => {
    navigate('/')
  }

  const handleSignIn = () => {
    localStorage.setItem('isAdminLoggedIn', 'false');
  }


  return (
    <div className="bg-green-400 h-16 flex">
      <div>
        <Avatar onClick={handleHome} className="mt-2 ml-9 h-12 w-auto" src={BrandLogo} size="lg" />
      </div>
      <h1 className="mx-auto my-auto font-Common text-3xl text-white">
        Food-Zone
      </h1>
      <div className="space-x-2 py-2 px-2">
        <Button onClick={handleSignIn} className={` ${isSignedIn ? 'h-12 w-12 p-0' : 'bg-black px-3 py-2 rounded-xl text-white hover:bg-slate-600'} `}>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </Button>
      </div>
    </div>
  );
}
