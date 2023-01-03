import { Add, Remove } from '@mui/icons-material'
import React,{useState  } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../components/Footer'
import FooterS from '../components/FooterS'
import Navbar from '../components/Navbar'
import { handGuns, rifles,shotguns,cart } from '../data'

const Container = styled.div`
    
`;
const Wrapper = styled.div`
    padding: 20px;
`;
const Title = styled.h1`
    color:white;
    font-weight: 300;
    text-align:center;
    margin-top:100px;
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-between;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border-color:white;
  border:${props=>props.type === "filled" && "none"};
  background-color:${props=>props.type === "filled" ? "red": "transparent"};
  color:white;
`;
const TopTexts = styled.div`
    
`;
const TopText = styled.span`
    text-decoration:underline;
    cursor: pointer;
    margin: 0px 10px;
    color:white;
`;
const Bottom = styled.div`
    display: flex;
    margin-top:50px;
    justify-content: space-between;
`;

const Info = styled.div`
   
    color:white;
    flex:3;
   
`;



const Image = styled.img`
    width: 200px;
`;
const Product = styled.div`
    display: flex;
    justify-content:space-between;
    border-bottom: 0.5px solid white;
    margin:10px;
    padding: 10px;
`;
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction:column;
    justify-content:space-around;
`;
const ProductName = styled.span`
    
`;
const ProductId = styled.span`
    
`;
const ProductDetail = styled.div`
    flex:2;
    display: flex;
`;
const PriceDetail = styled.div`
    flex:1;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items:center;
    margin-bottom:20px;
`;
const ProductAmount = styled.div`
    color:white;
    font-size: 24px;
    margin: 5px;
`;
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight:200;
`;


const Cart = () => {
    const [count, setCount] = useState(0);
    var pr =0;
  return (
    <Container>
        <Navbar/>
        <Wrapper>
            <Title>Your Items</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                
                <TopTexts>
                    <TopText>Shopping Bag({cart.length})</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                </TopTexts>
                
                <Link to='/checkout' state={{cart}}><TopButton type='filled'>CHECKOUT NOW</TopButton></Link>
            </Top>
            <Bottom>
                <Info>
                    {cart.map((item)=>(
                        <Product>
                        <ProductDetail>
                            
                            <Image src={item.image}></Image>
                            <Details>
                                <ProductName><b>Product: </b>{item.name}</ProductName>
                                <ProductId><b>ID: </b>{item.id}</ProductId>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                             {/*<ProductAmountContainer>
                                <Add onClick = {() => setCount(count+1)}/>
                                    <ProductAmount>{count}</ProductAmount>
                                <Remove onClick = {() => setCount(count-1)}/>
                    </ProductAmountContainer>*/}
                            <ProductPrice>{item.price} </ProductPrice>
                            
                        </PriceDetail>
                       
                    </Product>

                    ))}
                    
                    
                </Info>
                
               
            </Bottom>
        </Wrapper>
        <FooterS/>
        <Footer/>
    </Container>
  )
}

export default Cart