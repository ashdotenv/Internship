import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Navbar from './Component/Navbar'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<div style={{padding:"20px"}} ><Home/> <Home/> <Home/><Home/></div>} />
        <Route path='/register' element={<Register />} />
        <Route path='/about' element={<h1>Welcome To About Us Page</h1>} />
      </Routes>
    </>
  )
}

export default App