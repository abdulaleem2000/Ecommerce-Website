import React from 'react'
import styled from 'styled-components'
import gun from '../assets/gun_home.jpg'
const Container = styled.div`
    height:100vh;
    position:relative;
    overflow:hidden;
`;

const IntroImage = styled.img`
    height:100%;
    width:100%;
    opacity:0.2;
`;
const Heading = styled.h1`
    width:30%;
    position:absolute;
    top:300px;
    left:200px;
    color:white;
    
`;
const Red = styled.h1`
    width:200%;
    color:red;
    position:absolute;
    top:390px;
    left:200px;
    font-weight:bolder;
    font-style:italic;
    font-size:64px;
`;
const Intro = () => {
   
  return (
    <Container>
        <IntroImage src={gun}/>
        <Heading>The Only Thing That Stops A Bad Guy With A Gun</Heading>
        <Red>Is A Good Guy With A Gun</Red>
    </Container>
  )
}

export default Intro