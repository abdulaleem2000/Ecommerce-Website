import React from 'react'
import styled from 'styled-components'
import gun from '../assets/handguns.jpg'

const Container = styled.div`
    display:flex;
    
    background-color:#111111;
    width:100vw;
    height:60vh;
   
    align-items:center;
    margin-top:100px;
   
`;
const Image = styled.img`
 
    height:60vh;
    width:20vw;
    position:relative;
    right:0;
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
const Cont1 = styled.div`
    left:0px;
    display:flex;
    justify-content:space-evenly;
    border-style: solid;
`;
const Left = styled.div`
    flex:1;
    border-style: solid;
    border-color:white;
`;
const Right = styled.div`
    flex:1;
    border-style: solid;
    border-color:white;
`;

const About2 = () => {
  return (
    <Container>
        
        <H>Our<br/><span style={{color:'white'}}>Inventory</span></H>
        <Cont1>
            <Left>
                <H>Hand Guns</H>
                <P>a Gun designed for use by one hand, especially a Pistol or Revolver.</P>
            </Left>
            <Right>
                <H>Rifles</H>
                <P>a Gun, having a long spirally grooved Barrel which have Greater Accuracy over a Long Distance</P>
            </Right>
            
            <Right><H>Shotguns</H>
                <P>a smooth bore gun for firing small shot at short range.</P>
            </Right>
            <Right><H>Optics</H>
                <P>There is a saying ” Buy a Gun for $1,000 and Buy an Optic for $2,000″</P>
            </Right>
            <Right><H>Ammunition</H>
                <P>Ammunition is the Material Fired, scattered, dropped or detonated from any Weapon.</P>
            </Right>
            <Right><H>Accessories</H>
                <P>Up-gradation Products for your Shooting</P>
            </Right>
        </Cont1>
        <Image src={gun}></Image>
    </Container>

  )
}

export default About2