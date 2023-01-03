import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    flex:1;
    margin: 3px;
    position: relative;
    margin-top:30px;
    cursor: pointer;
    :hover{
        border-style: solid;
        border-color:red;
        transition: all 0.5s ease-out
    }
    padding:10px;
  margin-bottom:100px;
`

const Image = styled.img`
    width:100%;
    height:100%;
    object-fit: cover;
   
   
    
`
const Info = styled.div`
   
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
   
    
   
`
const Title = styled.h1`
    margin-bottom:20px;
    color:red;
`
const Button = styled.button`
    border: none;
    padding:10px;
    cursor: pointer;
    font-weight:600;
`
const Desc = styled.p`
    color:white;
    text-align:center;
`;
const Product = ({item}) => {
    const [getItem,setItem] = useState('');
  return (
    
    <Container >
        <Link to={"/"+item.name}><Image src={item.image}/></Link>
        <Info>
            <Title>{item.name}</Title>
            <Desc>{item.description}</Desc>
        </Info>
    </Container>
   
    
  )
}

export default Product