import { Response,Router,Request } from "express";
import data from '../../TestData';
const {wordList,scoresList}=JSON.parse(data)
const router=Router();

router.get('/words',(req:Request,res:Response)=>{
    const arr=['verb','adverb','adjective','noun']
    const container=JSON.parse(JSON.stringify(wordList))
    //slice 10 and get random values with all cases should included.
    const result:[]=container.slice(0,10).map(function(){
        let index=Math.floor(Math.random()*this.length)
        //sure if 4 cases should included
        while(!arr.includes(container[index].pos)&&arr.length!==0){
            index=Math.floor(Math.random()*this.length)
        }
        //delete case that included
        arr.splice(arr.indexOf(container[index].pos),1)
        return this.splice(index,1)[0]
    },container)
    res.send(result)
})
router.post('/rank',(req:Request,res:Response)=>{
    const score=req.body
    const obj={}
    // get all scoreList ranks count
    for(const x of scoresList ){
        obj[x]?(obj[x]++):(obj[x]=1)
    }
    // get numbers of ranks that blew score.
    let count=0
    for(const key in obj){
        if(+key<score){count=count+obj[key]}
    }
    const result=(Math.floor((count/scoresList.length)*100))
    res.send(result.toString())
})
export default router