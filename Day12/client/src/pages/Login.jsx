import  { useContext, useState } from 'react'
import AuthContext from '../Context/Auth/AuthContext'
import axios from 'axios'
const Login = () => {
  const { setUser, user, login } = useContext(AuthContext)
  const [credintials, setCredintials] = useState({ username: "", password: "" })
  const handleSubmit = (e) => {
    console.log(credintials)
    e.preventDefault()
    axios.post("http://localhost:5000/api/login", credintials,{ withCredentials: true }).then(({ data }) => {
      console.log(data);
    })
  }
 
  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg space-y-6 w-full max-w-md">
        <div>
          <label  className="block text-gray-700 font-semibold">Username</label>
          <input onChange={(e) => setCredintials({ ...credintials, username: e.target.value })} name="username" type="text" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Password</label>
          <input onChange={(e) => setCredintials({ ...credintials, password: e.target.value })} name="password" type="password" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Login</button>
      </form>
    </div>
    </>

  )
}

export default Login