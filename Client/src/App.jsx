import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Components/Home'
import LogInPage from '../Components/LogInPage'
import Navbar from '../Components/Navbar'
import LoggedinNavbar from '../Components/LoggedinNavbar'
import SignUp from '../Components/SignUp'
import FoodMenu from '../Components/FoodMenu'
import CartPage from '../Components/CartPage'
import BilingPage from '../Components/BilingPage'
import AdminPage from '../Components/AdminPage';
import { useUser } from "@clerk/clerk-react"; 


const App = () => {

  const { isSignedIn } = useUser();

  return (
  <>
  
  <BrowserRouter>
    {isSignedIn ? < LoggedinNavbar /> : <Navbar />}
      <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/SignUp"  element={<SignUp />} />
          <Route path="/SignIn" element={< LogInPage />} />
          <Route path="/ShoppingCart" element={< CartPage />} />
          <Route path="/BilingPage" element={<BilingPage />} />
          <Route path="/Menu" element={< FoodMenu />} />
          <Route path="/AdminPage" element={< AdminPage />} />
      </Routes>
    </BrowserRouter>

    

  </>
  )
}

export default App