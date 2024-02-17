import React from 'react'
import Home from '../Components/Home'
import LogInPage from '../Components/LogInPage'
import PreLoginNavbar from '../Components/PreLoginNavbar'
import LoggedinNavbar from '../Components/LoggedinNavbar'
import SignUp from '../Components/SignUp'
import FoodCards from '../Components/FoodCards'

const App = () => {
  return (
    <div>
       {/* < PreLoginNavbar/> */}
    <LoggedinNavbar/>
     {/* < Home/> */}
     {/* < LogInPage/> */}
     {/* < SignUp /> */}
      < FoodCards />
    </div>
  )
}

export default App