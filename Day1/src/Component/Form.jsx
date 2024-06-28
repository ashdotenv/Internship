import React from 'react'
import { Link } from 'react-router-dom'

const Form = ({ type }) => {
    return (
        <>
            <div className="rounded text-black flex items-center h-screen justify-center  bg-gray-100">
                <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                    <h1 className="text-2xl font-bold mb-6 text-center">{type}</h1>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" />
                    </div>
                    {type !== 'Login' ? <>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Username</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                        </div>
                    </> : ""}

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            {type ?? "Register"}
                        </button>
                    </div>
                    {type === "Register" ? <>
                        <h1 className='mt-5'>Already Have An Account ? <Link to={"/Login"} className='text-blue-400'>Login</Link> </h1></> : <h1 className='mt-5'>Don't Have An Account Yet? <Link to={"/Register"} className='text-blue-400'>Register</Link> </h1>}
                </form>
            </div>
        </>
    )
}

export default Form