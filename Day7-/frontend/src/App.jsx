import { useState } from 'react';
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import { Route, Routes } from 'react-router-dom';
import Register from './Pages/Register';
import Users from './Pages/Users';

function App() {
  

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route path='/users' element={<Users/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
     
    </>
  );
}

export default App;
