import { Response,Router,Request } from "express";
import data from '../../TestData';
const {wordList,scoresList}=JSON.parse(data)
const router=Router();

router.get('/words',(req:Request,res:Response)=>{
    const arr=['verb','adverb','adjective','noun']
    const obj={}
    const result:[]=wordList.slice(0,10).map(function(){
        let index=Math.floor(Math.random()*this.length)
        while(obj[index]&&!arr.includes(wordList[index].pos)){
            index=Math.floor(Math.random()*this.length)
        }
        obj[index]=true
        arr.splice(arr.indexOf(wordList[index].pos),1)

        return this.splice(index,1)[0]
    },wordList)
    console.log(result.length,'result')
    res.send(result)
})
router.post('/rank',(req:Request,res:Response)=>{
    console.log(req.body,'body')
    const {score}=req.body
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
    console.log(result,'rank percent')
    res.status(200).send(result)
})
export default router