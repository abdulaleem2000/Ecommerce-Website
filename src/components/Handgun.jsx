import { SearchOutlined, ShoppingCart, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
const Container = styled.div`
    
    margin: 50px;
   
    height: 350px;
    margin-top:100px;
    :hover{
        border-style:solid;
        border-color:red;
        transition: all 0.5s ease-out
    }
`;

const Circle = styled.div`
    
`;

const Image = styled.img`
    height: 75%;

`;

const Info = styled.div`

`;
const H2 = styled.h2`
    color:white;
    text-align:center;
    width:200px;
`;
const Icon = styled.div`
    
`;
const Handgun = ({item}) => {
  return (
    <Container >
       
        <Link to='/productpage' state={{item}}><Image src={item.image}></Image></Link>
      
        <H2>{item.name}</H2>
            
        
    </Container>
  )
}

export default Handgun