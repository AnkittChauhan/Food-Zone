import { Disclosure, Menu } from '@headlessui/react';
import { Bars3Icon,ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import { Badge } from "@nextui-org/react";
import BrandLogo from "../src/assets/BrandLogo.png"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}


export default function LoggedinNavbar() {
  const navigate = useNavigate();

  const handleCart = () => {
    navigate('/ShoppingCart');
  };

  const handleHome = () =>{
    navigate('/')
 }
 
 const handleItems = () => {
  navigate('/Menu')
 }

  const handleLogout = () => {

    localStorage.removeItem("Token")
    navigate('/')
    window.location.reload(); 


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
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-10 w-auto"
                    src={BrandLogo}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                       <button onClick={handleHome} className=' text-white hover:underline
                          rounded-md px-3 py-2 text-sm font-medium active:bg-gray-700 active:scale-x-110 scale-y-105 transition-all' >Home</button>
                       <button onClick={handleItems} className=' text-white hover:underline
                          rounded-md px-3 py-2 text-sm font-medium active:bg-gray-700 active:scale-x-110 scale-y-105 transition-all' >Items</button>
                      <button className=' text-white hover:underline
                          rounded-md px-3 py-2 text-sm font-medium active:bg-gray-700 active:scale-x-110 scale-y-105 transition-all' >About</button>
                  </div>
                  
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div onClick={handleCart} className="ml-4 flow-root lg:ml-6">
                  <a className="group -m-2 flex items-center p-2">
                    <Badge content="2" className='bg-red-500 text-white' shape="circle">
                      <ShoppingBagIcon
                        className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    </Badge>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3 transition-all">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-9 w-9 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="logo"
                      />
                    </Menu.Button>
                  </div>
                 
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-all">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                           
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={ handleLogout }
                            className={classNames(active ? 'bg-red-400 rounded-md' : '', 'block px-4 py-2 text-sm text-gray-800')}
                          >
                            Log out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                 
                </Menu>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
