const indxReducer = (state=-1,action:any)=>{
  switch (action.type) {
    case 'setIndx':
      return action.payload
    default:
      return state
  }
}
export default indxReducer

