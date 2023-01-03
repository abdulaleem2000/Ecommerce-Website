import React from 'react'
import styled from 'styled-components'
import register from '../assets/register.jpg'
import Navbar from '../components/Navbar';
import { Link,useNavigate} from 'react-router-dom';
//import 
const Container = styled.div`
 width: 100vw;
 height: 100vh; 
 background:url('https://wallpapercave.com/wp/wp2576549.jpg') center;
 background-repeat:no-repeat;
 background-size:cover;
 display:flex;
 align-items: center;
justify-content: center;
`; 
const Wrapper = styled.div`
width:40%;
    padding: 20px;  
    background-color:black;

`; 
const Form = styled.form`
    display: flex;
    flex-wrap:Wrap;
`; 
const Title= styled.h1`
font-size: 24px;
font-weight: 300;
 color:white;
`; 
const Input = styled.input`
    flex:1;
    min-width:40%;
    margin: 20px 10px 0px 0px; 
    padding: 10px;
`; 
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
    color:white;
`;
const Button = styled.button`
    width:40%;
    border:none;
    padding: 15px 20px;
    background-color:red;
    cursor: pointer;
`;  

const Register = () => {
    const navigate = useNavigate();
    const handleSubmit = event => {
        event.preventDefault();
    
        // 👇️ redirect to /contacts
        navigate('/');
      };
  return (
    <Container>
        <Navbar/>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form onSubmit={handleSubmit}>
                <Input placeholder="name" required/>
                <Input placeholder="last name" required/>
                <Input placeholder="username" required/>
                <Input placeholder="email" type='email' required/>
                <Input placeholder="password" type='password' required/>
                <Input placeholder="confirm password" type='password' required />
                <Agreement>
                    By creating an account, I consent to the processing of my personal data in accordance
                    with the <b>PRIVACY PLOICY</b>
                </Agreement>
                <Button type='submit'>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register