import React, { useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
const PrivateRoute = (props) => {
    const { Component } = props
    const navigate = useNavigate();

    const isAuthenticated = localStorage.getItem('token') ? true : false;
    console.log(isAuthenticated);
    if (!isAuthenticated) {
        console.log(")))_)00909-09-");
        navigate("/LogIn")
    }

    return (
        <>
            <Component />

        </>
    )
}

export default PrivateRoute