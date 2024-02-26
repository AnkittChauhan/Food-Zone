import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Components/Home'
import LogInPage from '../Components/LogInPage'
import PreLoginNavbar from '../Components/PreLoginNavbar'
import LoggedinNavbar from '../Components/LoggedinNavbar'
import SignUp from '../Components/SignUp'
import FoodMenu from '../Components/FoodMenu'
import CartPage from '../Components/CartPage'
import Checkout from '../Components/Checkout'


const App = () => {
  return (
  <>
  
  <BrowserRouter>
        < PreLoginNavbar />
      <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/SignUp"  element={<SignUp />} />
          <Route path="/SignIn" element={< LogInPage />} />
          <Route path="/ShoppingCart" element={<CartPage />} />
          <Route path="/CheckoutPage" element={<Checkout />} />
          <Route path="/CartPage" element={<CartPage />} />
          <Route path="/Menu" element={< FoodMenu />} />
      </Routes>
    </BrowserRouter>
  

  
  </>
  )
}

export default App