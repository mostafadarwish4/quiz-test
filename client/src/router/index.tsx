import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Practice from '../screens/Practice';
import Rank from '../screens/Rank';
import Start from '../screens/start';
function Router() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Start/>}/>
        <Route path='/test' element={<Practice/>} />  
        <Route path='/rank' element={<Rank/>} />  
        <Route path='*' element={<div>no page such like that.</div>}/>

    </Routes>
  </BrowserRouter>
  )
}

export default Router