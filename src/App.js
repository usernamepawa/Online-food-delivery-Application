import React from 'react'
import "./App.css"
import Home from "./screens/Home"
import Footer from './components/Footer'
import {Routes,Route} from "react-router-dom"
import Login from "./screens/Login"

import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Signup from './screens/Signup.js'
import { CartProvider } from './components/ContextReducer.js'
import Cart from './screens/Cart.js'
import MyOrder from './screens/MyOrder.js'




function App() {
  return (
   <>
   {/* <div> <Home/>
    <div><Footer/></div> 
  </div>*/}
  <CartProvider>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/createuser' element={<Signup/>}/>
    <Route path='myorder' element={<MyOrder/>}></Route>

  </Routes>
  </CartProvider>
   </>
  )
}

export default App