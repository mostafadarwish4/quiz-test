import { numberAction } from "../actionsTypes";
import { setResult } from "../constants";

const resultReducer = (state=0,action:numberAction)=>{
  switch (action.type) {
    case setResult:
      return state+10
    default:
      return state
  }
}
export default resultReducer;
