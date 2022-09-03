import React, { useEffect } from 'react'
import { Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate } from "react-router-dom";
import { State } from '../interfaces';
import { appDispatch } from '../store';
import { fetchWords } from '../store/actions';

interface Forms{
    btnText:string,
    header:string,
    fmid:string,
    smid:string,
}
const Form = ({btnText,header,fmid,smid}:Forms) => {
  const dispatch:appDispatch=useDispatch()
  const navigate=useNavigate()
  const index=useSelector((state:State)=>state.index)
  useEffect(()=>{
    dispatch(fetchWords())
  },[dispatch])
  return (
    <Container style={{width:600,}} className='mx-auto p-5 mt-5 align-items-center bg-secondary bg-opacity-50  p-3 d-flex justify-content-center  flex-column'>
       <h1>{header}</h1>
       <br/>
       <p style={{fontSize:18,}}>{fmid}</p>
       <p >{smid}</p>
       <Button variant='success' style={{minWidth:100}}  
       onClick={()=>{
        dispatch({type:'setIndx',payload:index+1})
        navigate('/test')
       }}>
        {btnText}
        </Button>
    </Container>
  )
}




export default Form