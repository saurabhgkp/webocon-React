import React, { useState } from 'react'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
    const [id, setId] = useState(localStorage.getItem('userId'));
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login')
    }
    const handleDelete = () => {
        axios.delete(`http://localhost:8080/user/userDelete?id=${id}`).then(response => {
            handleLogout()
        }).catch(error => {
            console.error(error);
        });

    }
    return (
        <>
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">webOcon</a>
                    </div>
                    <ul class="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li class="active"><Link to="/Edit">Edit Profile</Link></li>
                        {localStorage?.getItem('token') ? <li> <button className='mt-3 btn btn-danger ' onClick={handleLogout}> Log Out </button>  </li>:<li> <button className='mt-3 btn btn-danger ' onClick={()=>navigate('/login')}> Log In </button>  </li>}
                        <li> <button className='mt-3 btn btn-danger' onClick={handleDelete}>Delete Account </button>  </li>

                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar