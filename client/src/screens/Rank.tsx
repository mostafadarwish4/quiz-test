import React from 'react'
import { useSelector } from 'react-redux';
import { State } from '../interfaces';
import Form from './Form';
const Rank = () => {
  const rank=useSelector((state:State)=>state.rank)
  return (
   <Form header="Test Result's Rank"
    btnText='Take again'
    fmid={`Here is Your test Rank is ${rank||"80%"}. `}
    smid='You can take the test again!'
    
   /> 
  )
}

export default Rank