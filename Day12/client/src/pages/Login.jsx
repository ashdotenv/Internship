import React, { useContext } from 'react'
import AuthContext from '../Context/Auth/AuthContext'

const Login = () => {
  const { setUser, user, login } = useContext(AuthContext)
  const handleSumbit = (e) => {
    e.preventDefault()
  }
  return (
    <div>
      <form onSubmit={handleSumbit} className='border h-full '>
        <h1>Username</h1>
        <input onChange={(e) => setUser({ ...user, username: e.target.value })} className='border-black border' type="text" name='username' />
        <h1>Email</h1>
        <input onChange={(e) => setUser({ ...user, email: e.target.value })} className='border-black border' type="text" name='email' />
        <br /> <button onClick={() => login(user)} className='p-2 bg-green-400 mt-5 rounded-xl'>Login</button>
      </form>
    </div>
  )
}

export default Login