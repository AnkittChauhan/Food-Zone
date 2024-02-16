import React from 'react'
import Home from '../Components/Home'
import LogInPage from '../Components/LogInPage'
import PreLoginNavbar from '../Components/PreLoginNavbar'
import LoggedinNavbar from '../Components/LoggedinNavbar'

const App = () => {
  return (
    <div>
       {/* < PreLoginNavbar/> */}
    <LoggedinNavbar/>
     < Home/>
     {/* < LogInPage/> */}
    
    </div>
  )
}

export default App