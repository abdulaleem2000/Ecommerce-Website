import React from 'react'
import styled from 'styled-components'
import gun from '../assets/rifles.jpg'

const Container = styled.div`
    display:flex;
    overflow:hidden;
    background-color:#111111;
    width:100vw;
    height:60vh;
   
    align-items:center;
    margin-top:100px;
   
`;
const Image = styled.img`
 
    height:60vh;
    width:40vw;
`
const H = styled.h1`
    flex:1;
    color:red;
    text-align:center;
`;
const P = styled.p`
    flex:2;
    color:white;
    font-size:20px;
    text-align:center;
`;
const About1 = () => {
  return (
    <Container>
        <Image src={gun}></Image>
        <H>We, Tactical Arms,<br/><span style={{color:'white'}}>We are established since 2005.</span></H>
        <P>Tactical Arms buy, sell, trade and deal in all types of Non Prohibited Bore Firearms and Ammunition including new, used, collectible products. We will take time to listen to your questions and then offer the finest solution that  suits you. We know that buying a firearm involves immense amounts of time, money, and responsibility and we are there to help you make the best choice for the protection of you and your family.
We are here to help you considering your Firearm, and we are very appreciative and honored that our customers respect and value our information, products, and service, as we respect and value each one of them as they are our first Priority.</P>
    </Container>

  )
}

export default About1