import React, { useState } from 'react'
import  Button  from 'react-bootstrap/Button'
import  Container  from 'react-bootstrap/Container';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { State} from '../interfaces';
import { appDispatch } from '../store';
import { fetchRank } from '../store/actions';
const choices=['verb','noun','adjective','adverb']
const Practice = () => {
    const index=useSelector((state:State)=>state.index)
    const words=useSelector((state:State)=>state.words)
    const navigate=useNavigate()
    const dispatch:appDispatch=useDispatch()
    //to check if res is right or wrong
    const [res,setRes]=useState<boolean|string>(false)
    //know what i answered is right or wrong
    const [verfy,setVerfy]=useState(false)
    const chechEquality:(item:any)=>string=(item)=>{
        //find the propar color for every choice
        if(verfy){
            if(res===words[index].pos){
                return (item===res)?'success':"outline-secondary"
            }else if(res===item){
                return 'danger'
            }else{
            return "outline-secondary"
        } 
        }
        return"outline-secondary"
    }
  return (
    <Container style={{width:600,}}
    className='mx-auto p-5 mt-5   bg-secondary bg-opacity-10 p-3 d-flex justify-content-center  flex-column'>
        <p className='h1 '>Q <span className='text-secondary'>{index+1}</span>/10</p>
        <div className='m-2' style={{height:1,width:'100%',backgroundColor:'gray'}}></div>
        <p className='h3 text-secondary'>-"{words[index].word}" is a .......</p>
        <div >
            {/* create choices buttons */}
            <div className='d-flex flex-column ' >
                {
                    
                    choices.map((item,indx)=>(
                    <Button 
                        style={{width:200,}}
                        variant={chechEquality(item)}
                        disabled={verfy?true:false}
                        onClick={()=>{
                            setRes(item)
                        }}
                        className='btn  m-1 d-flex' >
                        {item}</Button>
                    )
                        )}
                
            </div>
        <div className='m-2' style={{height:1,width:'100%',backgroundColor:'gray'}}></div>
            <div className='d-flex justify-content-end'>

                {
                   res&&( !verfy?<div className='text-danger'style={{cursor:'pointer',fontSize:24}}
                     onClick={()=>{
                        setVerfy(true)
                    }
                    }
                      >Check</div>:
                    <div style={{cursor:'pointer',fontSize:24}}
                    onClick={()=>{
                        //increase reusult by 10
                        if(words[index].pos===res) dispatch({type:'setResult'})
                        //check if last element so finish and reset
                        if(index===2){
                            navigate('/rank')
                            dispatch({type:'setIndx',payload:-1})
                        }else{dispatch({type:'setIndx',payload:index+1})}
                        setVerfy(false)
                        setRes(false)
                    }}
                    >{index===9?'Finish':'Next'}</div>)
                }
            </div>
        <ProgressBar max={10} now={index+1}  style={{width:'90%',height:15,margin:10}} variant='info'/>
        </div>
    </Container>
  )
}

export default Practice