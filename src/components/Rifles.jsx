import React,{useState} from 'react'
import styled from 'styled-components'
import Handgun from './Handgun';
import { rifles } from '../data'

import Handguns from './Handguns';

const Container = styled.div`
  
    display:flex;
    flex-wrap:wrap; 
    justify-content:space-between;
    overflow:hidden;
    
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
const Rifles = () => {
  const [state, setstate] = useState({
    query: '',
    list: []
    })

    const handleChange = (e) => {
        const results = rifles.filter(rifle=> {
        if (e.target.value === "") return rifles
          return rifle.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setstate({
        query: e.target.value,
        list: results
      })
    }
  return (
    <Container>
        <Input placeholder='Search Guns' type="search" onChange={handleChange} value={state.query}></Input>
        
        {(state.query === '' ? rifles.map((item1)=>(<Handgun item={item1} key={item1.id}></Handgun>)) : state.list.map(item => {
          return <Handgun item={item} key={item.id}></Handgun>
        }))}
        {/*rifles.map((item)=>(
            <Handgun item={item} key={item.id}></Handgun>
        ))*/}
    </Container>
  )
}

export default Rifles