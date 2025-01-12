import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import Home from '../src/pages/home'
import SignIn from '../src/pages/SignInPage'



const Routers = () => {
  return (
    <div>
     <Routes>
        <Route path='/' element={<Navigate to='/home'/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/signin' element={<SignIn/>}/>

        
     </Routes>
    </div>
  )
}

export default Routes