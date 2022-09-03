import { Response,Router,Request } from "express";
import data from '../../TestData';
const {wordList,scoresList}=JSON.parse(data)
const router=Router();

router.get('/words',(req:Request,res:Response)=>{
    const result:[]=wordList.slice(0,10)
    // .map(function(){
    //     return this.splice(Math.floor(Math.random()*this.length),1)
    // })
    res.send(result)
})
router.post('/rank',(req:Request,res:Response)=>{
    const {score}=req.body
    const obj={}
    // for(let x in scoresList ){
        
    // }
    res.send()
})
export default router