import { Disclosure, Menu } from '@headlessui/react';
import { Bars3Icon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Badge } from "@nextui-org/react";
import BrandLogo from "../src/assets/BrandLogo.png"
import { Toaster, toast } from 'sonner';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
// import { useAuth } from "@clerk/clerk-react";




export default function LoggedinNavbar() {

  const [ isAdminLoggedIn , setIsAdminLoggedIn ] = useState(false);
  const [adminMail, setAdminMail] = useState(' ');
  const [adminPass, setAdminPass] = useState(' ');
  // const { isSignedIn } = useAuth();


  // useEffect(() => {
  //   if (!isSignedIn) {
  //     localStorage.setItem('isAdminLoggedIn', 'false');
  //   }
  // }, [isSignedIn]);


  // This removes Admin Access from localStorage !

  // useEffect(() => {
  //   if (!isSignedIn) {
  //     localStorage.setItem('isAdminLoggedIn', 'false');
  //   }
  // }, [isSignedIn]);


  useEffect(() => {

  const storedValue = localStorage.getItem('isAdminLoggedIn');
  if (storedValue === 'true') {
    setIsOpen(false);
  }

  }, []);


  const navigate = useNavigate();

  const handleCart = () => {
    navigate('/ShoppingCart');
  };

  const handleAdmin = () => {
    
    navigate('/AdminPage')

    const storedVal = localStorage.getItem('isAdminLoggedIn');
    
    if( storedVal === 'true' ){
      setIsOpen(false)
    }
    else{
      setIsOpen(true);
    }

  }

  const handleYourProfile = () => {
    toast.warning('Page is not Ready...')
  }

  const handleItems = () => {
    navigate('/Menu')
  }

  const handleLogoClick = () => {
    navigate('/')
  }
  const [isOpen, setIsOpen] = useState(false);

  const handleAdminClose = () => {
    setIsOpen(false)
    navigate('/')
  }


  const REGadminEmail = import.meta.env.VITE_ADMIN_MAIL;
  const REGadminPassword = import.meta.env.VITE_ADMIN_PASS



  const handleAdminSubmit = () => {
    
    if ( adminMail === REGadminEmail && adminPass === REGadminPassword ) {
      setIsOpen(false)
      // setIsAdminLoggedIn(true);

      localStorage.setItem('isAdminLoggedIn', 'true');

      toast.success('Welcome Admin', {
        autoClose: 500,
      })
      
    }
    else{
      toast.error('Wrong ID/PASS', {
        autoClose: 500,
      })
    }
  }

 

  return (
    <Disclosure as="nav" className="bg-green-400">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div onClick={handleLogoClick} className="flex flex-shrink-0 items-center">
                  <img
                    className="h-10 w-auto"
                    src={BrandLogo}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex">
                    <button onClick={handleYourProfile} className=' text-white hover:underline
                          rounded-md px-3 py-2 text-sm font-medium active:bg-gray-700 active:scale-x-110 scale-y-105 transition-all' >About</button>
                    <Toaster position="top-center" expand={false} richColors />
                    <button onClick={handleItems} className=' text-white hover:underline
                          rounded-md px-3 py-2 text-sm font-medium active:bg-gray-700 active:scale-x-110 scale-y-105 transition-all' >Items</button>
                    <button onClick={handleAdmin} className=' text-white hover:underline
                          rounded-md px-3 py-2 text-sm font-medium active:bg-gray-700 active:scale-x-110 scale-y-105 transition-all' >Admin</button>
                  </div>

                </div>

                {isOpen && (
                  <div className="fixed inset-0 flex items-center justify-center backdrop-blur ">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                      <h2 className="text-xl font-semibold">Admin ? Prove it !</h2>
                      <p className="mt-2 text-gray-600">Only admin can go futher</p>

                      {/* Input Boxes */}
                      <div className='mt-5'>
                        <input
                          onChange={(e) => {
                            setAdminMail(e.target.value)
                          }}
                          type="text"
                          placeholder='admin Mail'
                          className='text-sm p-2 border-b focus:outline-none'
                        />
                        <input
                          onChange={(e) => {
                            setAdminPass(e.target.value)
                          }}
                          type="text"
                          placeholder='admin Pass'
                          className='text-sm p-2 border-b focus:outline-none'
                        />

                      </div>

                      {/* Close Button */}
                      <div className='space-x-2'>
                        <button
                          onClick={
                            handleAdminClose
                          }
                          className="mt-4 px-4 py-1 bg-red-500 hover:bg-red-600 text-white rounded"
                        >
                          Close
                        </button>
                        <button
                          onClick={
                            handleAdminSubmit
                          }
                          className="mt-4 px-4 py-1 bg-green-500 hover:bg-green-600 text-white rounded"
                        >
                          Submit
                        </button>
                        <Toaster position="top-center" expand={false} richColors />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="flex gap-5 ml-4 flow lg:ml-6">
                  <a onClick={handleCart} className="group -m-2 flex items-center p-2">
                    <Badge content="2" className='bg-red-500 text-white' shape="circle">
                      <ShoppingBagIcon
                        className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    </Badge>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>

                  <div className='h-2 w-6 p-0'>
                    <SignedIn>
                      <UserButton />
                    </SignedIn>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
