import { createStore, applyMiddleware,combineReducers } from 'redux'
import wordsReducer from './reducers/words';
import resultReducer from './reducers/result';
import rankReducer from './reducers/rank';
import indexReducer from './reducers/indx';
import thunk from 'redux-thunk'
const reducer=combineReducers( {
    words:wordsReducer,
    result:resultReducer,
    rank:rankReducer,
    index:indexReducer,
  })
const store:any = createStore(
  reducer, applyMiddleware(thunk)
)
export default store;
export type appDispatch=typeof store.dispatch