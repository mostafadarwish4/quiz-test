import { createSlice } from '@reduxjs/toolkit'
const indxReducer = (state=-1,action:any)=>{
  switch (action.type) {
    case 'setIndx':
      return action.payload
    default:
      return state
  }
}
export default indxReducer
// const indxSlice = createSlice({
//   name: 'Indx',
//   initialState: -1,
//   reducers: {
//     setIndx: (state) => {
//       state++
//     }
//   }
// })
// export const {setIndx}=indxSlice.actions;
// export default indxSlice.reducer
