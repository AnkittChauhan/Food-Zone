import React from 'react'
import Home from '../Components/Home'
import LogInPage from '../Components/LogInPage'
import PreLoginNavbar from '../Components/PreLoginNavbar'
import LoggedinNavbar from '../Components/LoggedinNavbar'
import SignUp from '../Components/SignUp'
import FoodCards from '../Components/FoodCards'
import ExampleItems from '../Components/ExampleItems'
import FoodMenu from '../Components/FoodMenu'
import CartPage from '../Components/CartPage'
import Checkout from '../Components/Checkout'


const App = () => {
  return (
    <div>
       {/* < PreLoginNavbar/> */}
    <LoggedinNavbar/>
     {/* < Home/> */}
     {/* < LogInPage/> */}
     {/* < SignUp /> */}
      {/* < FoodCards /> */}
      {/* < ExampleItems /> */}
      {/* < FoodMenu/> */}
        {/* < CartPage /> */}
        < Checkout />
    </div>
  )
}

export default App