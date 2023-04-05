import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const Userlog = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState()
  const [fromData, setFromData] = useState({})
  const handelChange = (e) => {
    setFromData({ ...fromData, [e.target.name]: e.target.value });
  };

  useEffect(()=>{
    if(localStorage.getItem('token')){
      navigate('/')
    }
  },[])
  const handelonSubmit = async (e) => {
    e.preventDefault();
    // axios.post('http://localhost:8080/user/login', fromData)
    //   .then(response => {
    //     localStorage.setItem('token', response.data.token);
    //     localStorage.setItem('userId', response.data.userId);
    //     setToken(response.data.token);
    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //   });
    try{

      const response =await  axios.post('http://localhost:8080/user/login', fromData)
      if(response.status == 200){
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userId', response.data.userId);
        setToken(response.data.token);
        navigate('/')
      }
      
      console.log(response)
    }
    catch(err){
      console.log(err)
    }
      
      

  }

  console.log(token);
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-md-6 mx-auto">
            <h2>customer LogIn</h2>
            <form >
              <div class="form-group">
                <label for="email">Email:</label>
                <input type="text" class="form-control" onChange={handelChange} name="email" />
              </div>
              <div class="form-group">
                <label for="pwd">Password:</label>
                <input type="password" class="form-control" onChange={handelChange} name="password" />
              </div>

              <button type="submit" class="btn btn-default" onClick={handelonSubmit}>Submit</button>
            </form>
            <nav class="navbar">

              <ul class="nav navbar-nav">
                <li class="active"><Link to="/Reg">sign-up</Link></li>
              </ul>
            </nav>

          </div></div>  </div></>
  )
}

export default Userlog