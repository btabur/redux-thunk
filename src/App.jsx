import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Basket from './pages/Basket'
import Header from './components/Header'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getProduct } from './redux/actions/productAction'


const App = () => {
  axios.defaults.baseURL= 'https://fakestoreapi.com';

  const dispatch = useDispatch();
  useEffect(()=> {
    
   dispatch(getProduct())
  },[])
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/basket' element={<Basket/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
