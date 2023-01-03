import React,{useEffect} from 'react'
import styled from 'styled-components';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const H1=styled.h1`
    color:white;
    margin-top:100px;
    text-align: center;
`;
const Container = styled.div`
  margin:100px;
  text-align:center;
`
const P = styled.p`
  color:white;
  font-size:30px;
`
const Members = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
    <div>
        <H1>OUR MEMBERSHIP BENEFITS</H1>
        <H1>Members Exclusive</H1>
        <Container>
          <P>1) Lifetime guidance on Arms and ammunitions bought through us.</P>
         <P>2) Exclusive guidance regarding buying and selling of your firearm.</P> 
         <P>3) Yaldram resort and shooting club – Islamabad, 10% discount.</P>
         <P>4) Gun and Country Club – Islamabad, 25% discount.</P> 	
          <P>5)	Lahore Garrison shooting Gallery – Lahore, 15% discount.</P>
          <P>6)	Raasty Shooting range – Lahore 20% discount.</P>
          <P>7)	Thunder shooting club – Lahore, 15% discount.</P>
          <P>8)	Karachi Garrison skeet and shooting range -Karachi. 30% Discount.</P>
          <P>9)	Rangers shooting and saddle club – Karachi, 20% discount.</P>
          <P>10)	Pakistan Navy shooting range – Karachi, 35% discount.</P>
        </Container>
       
        <Navbar/>
        <Footer/>
    </div>
  )
}

export default Members