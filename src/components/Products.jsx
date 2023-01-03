import React from 'react'
import styled from 'styled-components';
import { products } from '../data';
import Product from './Product';

const Container = styled.div`
    height:100vh;
    
`;
const Hcontainer = styled.div`
    display:flex;
    align-items: center;
   justify-content:center;
  
`;
const Heading = styled.h1`
    color:white;
    font-weight:bolder;
    font-size:60px;
`;
const HeadingRed = styled.h1`
  font-size:60px;
  color:red;  
    margin-left:5px;
`;
const Para = styled.p`

  
  color:white;
 
  margin:auto;  
  width:30%;
  text-align:center;
`;

const ProductContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
    @media screen and (max-width: 420px){
        display:block;
    }
`;
const Products = () => {
  return (
    <Container>
        <Hcontainer>
            <Heading>We Are </Heading>
            <HeadingRed> Tactical Arms</HeadingRed>
        </Hcontainer>
        <Para>
          We Are The Largest And Most Reliable Firearms Dealer In Pakistan.
          We Are Dealing  In Following Categories :
        </Para>
        <ProductContainer>
          {products.map((item)=>(
            <Product item={item}></Product>
          ))}
        </ProductContainer>
    </Container>
    
  )
}

export default Products