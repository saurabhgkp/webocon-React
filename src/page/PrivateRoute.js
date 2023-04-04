import React, { useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
const PrivateRoute = (props) => {
    const { Component } = props
    const navigate = useNavigate();
    useEffect(() => {
        const isAuthenticated = localStorage.getItem('token') ? true : false;
        if (!isAuthenticated) {
            navigate("/LogIn")
        }
    })
    return (
        <>
            <Component />

        </>
    )
}

export default PrivateRoute