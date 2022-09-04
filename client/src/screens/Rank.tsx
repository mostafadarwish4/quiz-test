import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../interfaces';
import { appDispatch } from '../store';
import { fetchRank } from '../store/actions';
import Form from './Form';
const Rank = () => {
  const dispatch:appDispatch=useDispatch();
  const result =useSelector((state:State)=>state.result)
  useEffect(()=>{
     dispatch(fetchRank(result))
  },[dispatch,result])
  const rank=useSelector((state:State)=>state.rank)
  return (
   <Form header="Test Result's Rank"
    btnText='Take again'
    fmid={`Here is Your test Rank is ${rank} %. `}
    smid='You can take the test again!'
    
   /> 
  )
}

export default Rank