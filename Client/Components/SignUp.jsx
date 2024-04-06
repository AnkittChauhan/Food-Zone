import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios, { Axios } from 'axios';
import SignUpImg from '../public/assets/SignIn.jpg'


const SignUp = () => {

  const navigate = useNavigate();

  const handleSignIn = () => {
      navigate('/SignIn')
      console.log("Idhar Takk");
  }

  const [ email , useEmail ] = useState('');
  const [ password , usePassword ] = useState('');

  const user = {
    email ,
    password
  }


  const handleCreateAccount = () => {
    console.log("idhar tak 2");
  }

  // const handleCreateAccount = () => {
  //   if (email == "" && password == "") {

  //     return alert("Enter the values first")

  //   } else {
  //     axios.post("mongodb://localhost:27017/createUser", {
  //       email ,
  //       password
  //     })
  //     console.log(user);
  //   }

  // };


  return (
    <div className='grid grid-cols-2'>

        <div>
            <img className='h-screen w-full' src={SignUpImg}/>
        </div>
        <div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://png.pngtree.com/png-vector/20191003/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1786166.jpg"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create your Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  onChange={ (e) => {
                    useEmail(e.target.value)
                  }}
                  id='Email'    
                  autoComplete="email"
                
                  className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  onChange={ (e) => {
                    usePassword(e.target.value)
                  }}
                  id='Pass'
                  autoComplete="current-password"
                
                  className="block px-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button onClick={handleCreateAccount}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create Account
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already a member?{' '}
            <a onClick={ handleSignIn } className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Login
            </a>
          </p>
        </div>
      </div>
        </div>

    </div>
  )
}

export default SignUp