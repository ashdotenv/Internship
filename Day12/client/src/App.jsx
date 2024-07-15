import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthState } from './Context/Auth/AuthState'
import Home from './pages/Home'
import Navbar from './Components/Navbar'
import Login from './pages/Login'
function App() {
  return (
    <>
      <AuthState>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </BrowserRouter>
      </AuthState>
    </>
  )
}

export default App
