import React, { useEffect } from 'react'
import styled from 'styled-components'
import Filter from '../components/Filter'
import Footer from '../components/Footer'
import FooterS from '../components/FooterS'
import Rifles from '../components/Rifles'
import Navbar from '../components/Navbar'
const H1=styled.h1`
    color:white;
    margin-top:100px;
    text-align: center;
`;
const RiflePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
    <div>
        <H1>Rifles</H1>
       
        <Navbar/>
        <Rifles/>
        <FooterS/>
        <Footer/>
    </div>
  )
}

export default RiflePage