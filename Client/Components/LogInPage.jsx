import axios, { Axios } from 'axios';
import { useNavigate } from "react-router-dom"
import { useState } from 'react';
import { Toaster, toast } from 'sonner';

export default function LogInPage() {

  const [ email , setEmail ] = useState('');
  const [ password , setPassword ] = useState('');


  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/SignUp')
}

  const handleLogin = async(e) => {
    e.preventDefault()
    if(!email || !password ) return console.log("Email/Pass is Invalid");

   await axios.post('https://food-zone-nco8.onrender.com/Login', { email, password })
    .then( response => {
      const token = response.data.Token;
      console.log("Login successful:", token);
      localStorage.setItem("Token",token)
      navigate('/')
      window.location.reload();
    })
    .catch(error => {
  if (error.response && error.response.data) {
    toast.error("Login failed: "+error.response.data.message )
  } else {
    toast.error("Login failed: "+error.message )
  }
});
  }
 



   

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://png.pngtree.com/png-vector/20191003/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1786166.jpg"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  onChange={ (e) => setEmail(e.target.value) }
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
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
                   onChange={ (e) => setPassword(e.target.value) }
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={ handleLogin }
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
              <Toaster position="top-center" expand={false} richColors />
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a onClick={ handleSignUp } className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
             Create an Account
            </a>
          </p>          
        </div>
      </div>
    </>
  )
}
