// import type { PayloadAction } from '@reduxjs/toolkit'
const rankReducer =(state='',action:any) => {
  switch (action.type) {
    case 'setRank':
     return action.payload
    default:
      return state
  }
}
  
  


export default rankReducer

