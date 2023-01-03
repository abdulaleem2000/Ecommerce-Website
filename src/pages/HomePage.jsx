import React, { useEffect } from 'react'
import Filter from '../components/Filter'
import Intro from '../components/Intro'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Footer from '../components/Footer'
import FooterS from '../components/FooterS'
const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
        <Navbar/>
        <Intro/>
        <Products/>
        
        <Footer/>
    </div>
  )
}

export default HomePage