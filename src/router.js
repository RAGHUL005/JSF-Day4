import React from 'react';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './login';
import RegisterForm from './signup';
import Navie from './Nav';
export default function Routing(){
    return(
        <BrowserRouter>
        <Routes>
        <Route exact path='/' element={<Login/>}></Route>
        <Route exact path='/signup' element={<RegisterForm/>}></Route>
        <Route exact path='/nav' element={<Navie/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}