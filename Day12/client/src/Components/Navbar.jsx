import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import AuthContext from '../Context/Auth/AuthContext'

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    return (
        <>
            <nav className='flex gap-4  bg-sky-200 justify-end p-2 text-xl'  >
                <NavLink to={"/"} >Home</NavLink>
                <NavLink to={"/register"} >Register</NavLink>
                <NavLink to={"/login"} >Login</NavLink>
                <NavLink to={"/addPost"} >AddPost</NavLink>
                <NavLink to={"/editPost"} >EditPost</NavLink>
            </nav>
        </>
    )
}

export default Navbar