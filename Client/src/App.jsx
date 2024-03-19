import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Components/Home'
import LogInPage from '../Components/LogInPage'
import PreLoginNavbar from '../Components/PreLoginNavbar'
import LoggedinNavbar from '../Components/LoggedinNavbar'
import SignUp from '../Components/SignUp'
import FoodMenu from '../Components/FoodMenu'
import CartPage from '../Components/CartPage'
import BilingPage from '../Components/BilingPage'
import Profile from '../Components/Profile';


const App = () => {
  return (
  <>
  
  <BrowserRouter>
        < LoggedinNavbar /> 
      <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/SignUp"  element={<SignUp />} />
          <Route path="/SignIn" element={< LogInPage />} />
          <Route path="/ShoppingCart" element={< CartPage />} />
          <Route path="/BilingPage" element={<BilingPage />} />
          <Route path="/Menu" element={< FoodMenu />} />
      </Routes>
    </BrowserRouter>


  
  </>
  )
}

export default App