import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Basket from '../pages/basket/Basket'
import AdminPanel from '../pages/adminPanel/AdminPanel'
import NotFound from '../pages/notFoundPage/NotFound'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/basket' element={<Basket/>}/>
        <Route path='/adminpanel' element={<AdminPanel/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router
