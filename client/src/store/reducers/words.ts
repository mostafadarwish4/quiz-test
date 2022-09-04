import { arrayAction } from "../actionsTypes"
import { getWords } from "../constants"

const wordsReducer = (state=[],action:arrayAction)=>{
  switch (action.type) {
    case getWords:
      return action.payload
    default:
      return state
  }
}

export default wordsReducer