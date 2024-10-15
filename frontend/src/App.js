import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from  './pages/Cart/Cart'
import Placeorder from './pages/PlaceOrder/Placeorder'

import {
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'

export default function App() {
  const[showLogin,setShowLogin]=useState(false);
  return (
    <>
    {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
        <Route exact path='/order' element={<Placeorder/>}/>
        <Route exact path='/verify' element={<Verify/>}/>
        <Route exact path='/myorders' element={<MyOrders/>}/>
      </Routes>
    </div>
    <Footer/>
    </>

  )
}
