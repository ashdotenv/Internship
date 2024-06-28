import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Home from './pages/Home'
import Form from './Component/Form'
import Buttons from './pages/Buttons'
import Heading from './Component/Heading'

function App() {
  return (
    <>
      <div className=' pb-12'>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<div style={{ padding: "20px" }} ><Home /> <Home /> <Home /><Home /></div>} />
        <Route path='/register' element={<Form type={"Register"} />} />
        <Route path='/login' element={<Form type={"Login"} />} />
        <Route path='/about' element={<h1>Welcome To About Us Page</h1>} />
        <Route path='/button' element={<Buttons />} />
        <Route path='/headingComponent' element={<>
          <Heading label={"Register"} />
          <Heading label={"Login"} />
          <Heading label={"Logout"} />
        </>} />
      </Routes>
    </>
  )
}

export default App