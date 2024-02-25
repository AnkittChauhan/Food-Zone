import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Components/Home'
import LogInPage from '../Components/LogInPage'
import PreLoginNavbar from '../Components/PreLoginNavbar'
import LoggedinNavbar from '../Components/LoggedinNavbar'
import SignUp from '../Components/SignUp'
import FoodCards from '../Components/FoodCards'
import ExampleItems from '../Components/FoodCards'
import FoodMenu from '../Components/FoodMenu'
import CartPage from '../Components/CartPage'
import Checkout from '../Components/Checkout'


const App = () => {
  return (
  <>
  
  {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={< Home />}>
          <Route path="/SignUp"  element={<SignUp />} />
          <Route path="/SignIn" element={< LogInPage />} />
          <Route path="/FoodCards" element={< FoodCards />} />
          <Route path="/ShoppingCart" element={<CartPage />} />
          <Route path="/CheckoutPage" element={<Checkout />} />
          <Route path="/CartPage" element={<CartPage />} />
        </Route>
      </Routes>
    </BrowserRouter> */}
  
      < FoodMenu />

  
  </>
  )
}

export default App