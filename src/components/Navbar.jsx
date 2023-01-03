import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import {mobile} from '../responsive'
import { display } from '@mui/system';
import {cart} from '../data'
const Container = styled.div`
    width:100%;
    height: 80px;
    background:black;
    opacity:0.5;
    position:fixed;
    top:0;
    z-index: 1;
   
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items:center;
  ${mobile({padding: "0px 20px"})}
`;

const Left = styled.div`
  
  flex:1;
  display:flex;
  align-items:center;
  ${mobile({display:"none"})}
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;



const Input = styled.input`
  border: none;

`;

const Logo = styled.h1`
  font-weight: bold;
  color:white;
  ${mobile({display:"none"})}
`;

const Center = styled.div`
  flex:1;
  text-align:center;
  ${mobile({display:"none"})}
`;

const Right = styled.div`
  flex:2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifycontent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor:pointer;
  :hover{
    color:red;
  }
  margin-left: 25px;
  color:white;
  text-decoration:none;
  ${mobile({display:"none",})}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
        <Logo>Ammunation</Logo>
        </Left>
        <Center>
         
        </Center>
        <Right>
          <Link to="/"><MenuItem>Home</MenuItem></Link>
          <Link to='/about'><MenuItem>About Us</MenuItem></Link>
          <Link to='/member'><MenuItem>Member Exclusive</MenuItem></Link>
          <Link to='/register'><MenuItem>REGISTER</MenuItem></Link>
          <Link to='/login'><MenuItem>SIGN IN</MenuItem></Link>
         <Link to='/cart'> <MenuItem>
            <Badge badgeContent={cart.length} color="primary">
            <ShoppingCartOutlinedIcon  />
            </Badge>
          </MenuItem></Link>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar