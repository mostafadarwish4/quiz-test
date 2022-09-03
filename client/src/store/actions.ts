import { appDispatch } from './index';

export const fetchWords=()=>async(dispatch:appDispatch)=>{
    try {
        const data=await fetch('http://localhost:3002/words')
        const words=await data.json();
        
        dispatch({type:'getWords',payload:words})
    } catch (error:any) {
       console.log(error.message) 
    }
    
}
export const fetchRank=(result:number)=>async(dispatch:appDispatch)=>{
    const res=await fetch('http://localhost:3002/rank',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        mode: 'no-cors', // no-cors, *cors, same-origin
        body:JSON.stringify(result) 
    })
    const rank=await res.json()
    dispatch({type:'setRank',payload:rank})
}