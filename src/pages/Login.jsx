import React from 'react'
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { Link,useNavigate} from 'react-router-dom';
const Container = styled.div`
 width: 100vw;
 height: 100vh; 
 background:url('https://cdn.fansshare.com/image/bullet/bullets-hd-wallpaper-pictures-cool-wallpapers-and-guns-wallpaper-guns-gun-1270203133.jpg') center;
 background-repeat:no-repeat;
 background-size:cover;
 display:flex;
 align-items: center;
justify-content: center;
`; 
const Wrapper = styled.div`
width:25%;
    padding: 20px;  
    background-color:black;

`; 
const Form = styled.form`
    display: flex;
    flex-direction:column;
`; 
const Title= styled.h1`
font-size: 24px;
font-weight: 300;
 color:white;
`; 
const Input = styled.input`
    flex:1;
    min-width:40%;
    margin: 10px 0px ; 
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
const P= styled.p`
    color:white;
    cursor: pointer;
    :hover{
        color:red;
    }
`;
const Login = () => {
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
            <Title>SIGN IN</Title>
            <Form onSubmit={handleSubmit}>
               
                <Input placeholder="username" required/>
              
                <Input placeholder="password"  type='password' required/>
                
               
               <Button type='submit' >LOGIN</Button>
                
            </Form>
            <Link to='/register' style={{textDecoration:'none'}}><P>CREATE A NEW ACCOUNT</P></Link> 
        </Wrapper>
    </Container>
  )
}


export default Login