import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { State } from '../interfaces'
import Form from './Form'

// import { setIndx } from '../store/reducers/indx';
const Start = () => {
 const words=useSelector((state:State)=>state.words) 
 console.log('words',words)
  return (
    <Form btnText='Start'
     header="VOCABULARY QUIZ"
     fmid='Want to know how expensivly your vocabulary is?'
     smid='Take this quiz and find out!'
      />
    
  )
}



export default Start