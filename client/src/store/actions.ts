import { appDispatch } from './index';

export const fetchWords=()=>async(dispatch:appDispatch)=>{
    try {
        const data=await fetch('http://localhost:5000/words')
        const words=await data.json();
        
        dispatch({type:'getWords',payload:words})
    } catch (error:any) {
       console.log(error.message) 
    }
    
}
export const fetchRank=(result:number)=>async(dispatch:appDispatch)=>{
    try {
        const res=await fetch('http://localhost:5000/rank',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(result) 
    })   
    const rank=await res.json()
    dispatch({type:'setRank',payload:rank})
    } catch (error:any) {
        console.log(error.message)
    }
    
}