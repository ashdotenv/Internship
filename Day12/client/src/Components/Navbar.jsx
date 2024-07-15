import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import AuthContext from '../Context/Auth/AuthContext'

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    return (
        <>
            <nav className='flex gap-4  bg-sky-200 justify-end p-2 text-xl'  >
                <NavLink>Home</NavLink>
                <NavLink>Services</NavLink>
                {user ? <NavLink onClick={logout}>Logout</NavLink> : <NavLink>Login</NavLink>}
            </nav>
        </>
    )
}

export default Navbar