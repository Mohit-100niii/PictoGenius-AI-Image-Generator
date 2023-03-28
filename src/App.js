import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import NavbarTop from './components/NavbarTop'
import ImageGenerationForm from './components/Generator'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavbarTop/>
        <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/generator" element={<ImageGenerationForm/>}/> 
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
