import React, { useEffect } from 'react'
import styled from 'styled-components'
import Filter from '../components/Filter'
import Footer from '../components/Footer'
import FooterS from '../components/FooterS'
import Rifles from '../components/Rifles'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom'
import { Add, Remove } from '@mui/icons-material'
import { cart } from '../data'

const Container=styled.div`
    
`;
const Wrapper=styled.div`
    margin-top: 100px;
    padding: 50px;
    display: flex;
`;
const ImgContainer=styled.div`
    flex:1;
`;
const Image=styled.img`
    
`;
const InfoContainer=styled.div`
    flex:1;
    padding: 0px 50px;
`;
const Title=styled.h1`
    font-weight: 200;
    margin: 20px 0px;
    color:white;
`;
const Desc=styled.p`
    color:white;
`;
const Price=styled.span`
    color:white;
    font-weight: 100;
    font-size: 40px;
`;
const AddContainer=styled.div`
  margin-top:50px;
   width:50%;
   display: flex;
   align-items: center;
   justify-content:space-between;
`;
const AmountContainer=styled.div`
  display: flex;
  align-items:center;
`;
const Amount=styled.span`
   width:30px;
   height: 30px;
   border-radius:10px;
   border:1px solid red;
   display: flex;;
   align-items: center;
   justify-content: center;
   color:white;
   margin:0px 5px;
`;
const Button=styled.button`
   padding: 15px;
  
   border:2px solid red;
   background-color:black;
   color:white;
   cursor: pointer;
   :hover{
    background-color:red;
   }
`;
const RiflePage = () => {
  const location = useLocation()
  
  const { item } = location.state
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

  return (
    <Container>
        <Navbar/>
        <Wrapper>
          <ImgContainer> 
            <Image src={item.image}></Image>
          </ImgContainer>
          <InfoContainer>
            <Title>{item.name}</Title>
            <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, impedit consectetur fuga voluptates facere quasi, rerum temporibus, quas minus dolorem quidem quos saepe incidunt? Sunt consequuntur aliquam doloribus cumque nulla.</Desc>
            <Price>{item.price}</Price>
            <AddContainer>
              {/*<AmountContainer>
                <Remove style={{color:'white',cursor:'pointer'}}/>
                <Amount>1</Amount>
                <Add style={{color:'white',cursor:'pointer'}}/>
              </AmountContainer>*/}
              <Button onClick={()=>cart.push(item)}>ADD TO CART</Button>
              {console.log(cart)}
            </AddContainer>
          </InfoContainer>
        </Wrapper>
        <FooterS/>
        <Footer/>
    </Container>
  )
}

export default RiflePage