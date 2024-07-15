import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";

export const AuthState = (props) => {
    const [user, setUser] = useState({
        username: "",
        email: ""
    })
    useEffect(() => {
        const storedUser = localStorage.getItem("user")
        if (storedUser !== undefined) {
            setUser(JSON.parse(storedUser))
        }
    }, [])

    const login = (userData) => {
        setUser(userData)
        localStorage.setItem("user", JSON.stringify(userData))
    }
    const logout = () => {
        setUser({ username: "", password: "" })
        localStorage.removeItem("user")
    }
    return (
        <AuthContext.Provider value={{ user, setUser, login, logout }}>
            {props.children}
        </AuthContext.Provider>
    )

}