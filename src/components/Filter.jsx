import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import { Search } from '@mui/icons-material';

const Container = styled.div`
    background-color:#Af090c;
    width:20%;
    border-radius:50px;
   position:relative;
   margin:auto;
   
    
`
const SearchContainer = styled.div`
  
  display:flex;
  
  align-items:center;
 
`;
const Input = styled.input`
    border: none;
    background-color:#d31c1f;
   
    padding:5px;
    width:90vw;
    height:40px;
    font-size:16px;
    color:white;
    border-radius:50px;
    ::placeholder{
        color:white;
        font-size:16px;
        margin-left:100px;
    }
`;
const ContainerSelect = styled.div`
  display:flex;
  padding:35px;
  margin-left: 25px;
`;
const ArmTypeSelect = styled.select`
  

`;
const Filter = () => {
  return (
    <Container>
        <SearchContainer>
        
           
            <Search style={{color:"white",margin:"0px 0px 0px -40px"}}/>
        </SearchContainer>
       
        
    </Container>
  )
}

export default Filter