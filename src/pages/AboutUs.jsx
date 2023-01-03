import React, { useEffect } from 'react'
import styled from 'styled-components'
import About1 from '../components/About1';
import About2 from '../components/About2';
import Footer from '../components/Footer';
import FooterS from '../components/FooterS';
import Navbar from '../components/Navbar'


const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
        <h1 style={{color:'red', marginTop:'100px', textAlign:'center'}}>About Us</h1>
        <Navbar/>
        <About1/>
        <About2/>   
        <FooterS/>
        <Footer/>
    </div>
   
  )
}

export default AboutUs