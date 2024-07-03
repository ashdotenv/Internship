import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const active = (isActive) => {
        return isActive ? "text-blue-500 font-bold" : ""
    }
    return (
        <div className='flex  bg-white fixed text-xl border-b-2 border-black  text-black ml-auto w-full justify-end' >
            <NavLink
                className={({ isActive }) => active(isActive)}
                style={{ padding: "8px" }}
                to={"/"}
            >
                Home
            </NavLink>
            <NavLink
                className={({ isActive }) => active(isActive)}
                style={{ padding: "8px" }}
                to={"/register"}
            >
                Register
            </NavLink>
            <NavLink
                className={({ isActive }) => active(isActive)}
                style={{ padding: "8px" }}
                to={"/Login"}
            >
                Login
            </NavLink>
        </div>
    )
}

export default Navbar