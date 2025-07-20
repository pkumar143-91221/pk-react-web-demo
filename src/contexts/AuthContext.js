import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        let fetchedUser = localStorage.getItem("User");
        if (fetchedUser) {
            setUser(JSON.parse(fetchedUser));
            navigate("/")
        }
    }, [])
    const login = (data) => {
        setUser(data);
        localStorage.setItem("User", JSON.stringify(data))
        navigate("/");
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem("User")
        navigate("/");
    }

    const value = {
        user,
        login,
        logout,
        isAuthenticated: !!user
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
}
