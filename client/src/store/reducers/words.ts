
const wordsReducer = (state=[],action:any)=>{
  switch (action.type) {
    case 'getWords':
      return action.payload
    default:
      return state
  }
}

export default wordsReducer