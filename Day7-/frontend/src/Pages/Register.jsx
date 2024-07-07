import axios from 'axios';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
    const [formData, setFormData] = useState({ fullName: "", username: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/register", formData).then(({ data }) => {
      console.log(data);
      ToastContainer.success("User Registered Successfully");
    }).catch(() => {
      toast.error("Error Registering User");
    });
  }
  return (
    <div className="roundex-xl flex items-center justify-center min-h-screen bg-gray-100">
        <form
          className="bg-white dark:bg-gray-900 p-8 rounded shadow-md w-full max-w-md"
          onSubmit={handleSubmit}
          method="post"
        >
          <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Register</h1>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">Full Name</label>
            <input
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600"
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              name='fullName'
              placeholder='Enter Full Name'
              type="text"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">Username</label>
            <input
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600"
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              name='username'
              placeholder='Enter Username'
              type="text"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">Email</label>
            <input
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              name='email'
              placeholder='Enter Email'
              type="email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">Password</label>
            <input
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600"
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              type='password'
              name='password'
              placeholder='Enter Password'
            />
          </div>
          <button
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
  )
}

export default Register