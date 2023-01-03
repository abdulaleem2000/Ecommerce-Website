import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';


const Summary = styled.div`
    color:white;
    flex:1;
    
    border: 0.5px solid lightgray;
    border-radius:10px;
    padding: 20px;
    height: 50vh;
`;
const SummaryTitle = styled.h1`
   font-weight: 200;
`;
const SummaryItem = styled.div`
   margin: 30px 0px;
   display: flex;
   justify-content:space-between;
   font-weight: ${props=>props.type === "total" && "500"};
   font-size: ${props=>props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span`
   
`;
const SummaryItemPrice = styled.span`
   
`;
const SummaryButton = styled.button`
   width: 100%;
   padding: 10px;
   font-weight: 600;
`;
const Checkout = () => {
    const location = useLocation()
    var { cart } = location.state;
   
    var sum=0;
    cart.map((item)=> (
        sum+=item.price
    ));
    console.log(sum);
    
  return (
    <div>
         <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>Rs. {sum}</SummaryItemPrice>
                        
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>Rs. 300</SummaryItemPrice>
                        
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>Rs. -300</SummaryItemPrice>
                        
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText >Total</SummaryItemText>
                        <SummaryItemPrice>Rs. {sum}</SummaryItemPrice>
                        
                    </SummaryItem>
                    <Link to='/' onClick={cart=[]}><SummaryButton>Pay NOW</SummaryButton></Link>
        </Summary>
    </div>
  )
}

export default Checkout