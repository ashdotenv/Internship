import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const active = (isActive) => {
        return isActive ? "text-red-500" : ""
    }
    return (
        <div >
            <NavLink
                className={({ isActive }) => active(isActive)}
                style={{ color: "white", padding: "8px" }}
                to={"/"}
            >
                Home
            </NavLink>
            <NavLink
                className={({ isActive }) => active(isActive)}
                style={{ color: "white", padding: "8px" }}
                to={"/register"}
            >
                Register
            </NavLink>
        </div>
    )
}

export default Navbar