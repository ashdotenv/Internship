import React from 'react'

const Login = () => {
  return (
    <div className='bg-white text-black h-screen flex flex-col items-center justify-center ' >
      <div className='p-8 rounded border bg-slate-300 border-black '>
        <h1 className='text-3xl text-red-600'>Login</h1>
        Username <br />
        <input className='border border-black bg-transparent' name='username' type="text" /> <br />
        Password <br /><input className='border border-black bg-transparent' name='email' type="text" /> <br />
        <br />
        <button className='bg-sky-300 rounded border p-2'>Submit</button>
      </div>
    </div>
  )
}

export default Login