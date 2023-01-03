import React from 'react'
import styled from 'styled-components';



const Container = styled.footer`
    display:flex;
    justify-content: space-evenly;
    width:100%;
    height:40vh;
    position:absolute;
    left:0;
    right:0;
    
    z-index:150;
    background-color:#232323;
    margin-top:250px;
    @media screen and (max-width:420px){
        margin-top:1600px;
    }
`;
const Left = styled.div`
    flex:1;
   margin-left:5%;
`
const Centre = styled.div`
    flex:1;
    align-items:center;
`;
const Right = styled.div`
    flex:1;
`;
const Logo = styled.h1`
    color:white;    
`;
const ParaLeft1 = styled.p`
    color:white;
   
`;
const ParaLeft2 = styled.p`
    color:white;
    
`;
const Footer = () => {
  return (
    <Container>
        
        <Left>
            <Logo>Ammunition</Logo>
            <ParaLeft1>We Are The Largest And Most Reliable Firearms Dealer In Pakistan</ParaLeft1>
            <ParaLeft2>Copyright © 2021 Tactical Arms. All Rights Reserved.</ParaLeft2>
        </Left>
        <Centre>
            <Logo>DHA Branch</Logo>
            <ParaLeft1>Address :<br/>
                48C Lane 8, Khayaban-e-Ittehad Road, D.H.A Phase 6, Bukhari Commercial Area., Karachi, 75500<br/>
                Telephone :
                (021) 35156035 - 35156036<br/>
                Mobile:
                + (92) 315-2075-756</ParaLeft1>
            
        </Centre>
        <Right>
            <Logo>Baghdad Branch</Logo>
            <ParaLeft1>
            Address :<br/>
Shop No 1 Balad Trade Centre,Bahadurabad Karachi<br/>   
Telephone :
021-34860301-2
            </ParaLeft1>
            
        </Right>

    </Container>
  )
}

export default Footer