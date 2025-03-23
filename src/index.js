import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App'
import './index.css'
import Log from "./Login"
import Sign from './Signup';
import { useState } from 'react';
import { Route, Routes,BrowserRouter,} from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));

function Act(){
  const [users,setusers] =useState(
    [
        {
            username:"ABC",
            password:"123"
        }
    ])

  return(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Log users={users} setusers={setusers}></Log>}></Route>
    <Route path='/Signup' element={<Sign users={users} setusers={setusers}></Sign>}></Route>
   <Route path='/App' element={<App></App>}></Route> 
   </Routes>
   </BrowserRouter>
  
)}
root.render(<Act></Act>);


