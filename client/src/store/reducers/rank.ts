import { stringAaction } from "../actionsTypes"
import { getRank } from "../constants"

const rankReducer =(state='',action:stringAaction) => {
  switch (action.type) {
    case getRank:
     return action.payload
    default:
      return state
  }
}
  
  


export default rankReducer

