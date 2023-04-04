import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">webOcon</a>
                    </div>
                    <ul class="nav navbar-nav">
                        <li><Link to="/User">Home</Link></li>
                        <li class="active"><Link to="/Edit">Edit Profile</Link></li>

                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar