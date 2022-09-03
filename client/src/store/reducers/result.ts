
const resultReducer = (state=10,action:any)=>{
  switch (action.type) {
    case 'setResult':
      return state+10
    default:
      return state
  }
}
export default resultReducer;
