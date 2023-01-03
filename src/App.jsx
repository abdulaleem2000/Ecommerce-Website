import React from 'react'
import {
  BrowserRouter as Router,
  
  Route,
  Routes,
} from "react-router-dom";
import HomePage from './pages/HomePage'
import './App.css'
import AboutUs from './pages/AboutUs';
import HandgunPage from './pages/HandgunPage';
import RiflePage from './pages/RiflePage';
import ShotgunPage from './pages/ShotgunPage';
import AmmoPage from './pages/Ammopage';
import ProductPage from './pages/ProductPage';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Members from './pages/Members';
import Checkout from './pages/Checkout';
const App = () => {
  return (
    <div>
    {/* This is the alias of BrowserRouter i.e. Router */}
    <Router>
      <Routes>
        {/* This route is for home component 
        with exact path "/", in component props 
        we passes the imported component*/}
        <Route path="/" element={<HomePage/>} />
          
        {/* This route is for about component 
        with exact path "/about", in component 
        props we passes the imported component*/}
        <Route path="/about" element={<AboutUs/>} />
          
        {/* This route is for contactus component
        with exact path "/contactus", in 
        component props we passes the imported component*/}
        <Route path="/HandGun" element={<HandgunPage/>} />
        <Route path="/Rifles" element={<RiflePage/>} />
        <Route path="/Shotguns" element={<ShotgunPage/>} />
        <Route path="/Ammunition" element={<AmmoPage/>} />
        <Route path="/productpage" element={<ProductPage/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/member" element={<Members/>} />
        <Route path="/checkout" element={<Checkout/>} />

        {/* If any route mismatches the upper 
        route endpoints then, redirect triggers 
        and redirects app to home component with to="/" */}

      </Routes>
    </Router>
  </div>
  )
}

export default App