import React, { useState } from 'react'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const Userlog = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState()
  const [fromData, setFromData] = useState({})
  const handelChange = (e) => {
    setFromData({ ...fromData, [e.target.name]: e.target.value });
  };
  const handelonSubmit = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/user/login', fromData)
      .then(response => {
        setToken(response.data.token);
      })
      .catch(error => {
        console.error('Error:', error);
      });



    // axios.post(
    //   "http://localhost:8080/user/login",
    //   fromData
    // ).then((res) => { res.Json() }).then((data) => {
    //   console.log(data);
    //   setToken(data.token)
    // }).catch(() => { console.log(); })

    // console.log(res.Json);
    // if (res.status === 200) {
    //   setToken(res.token)
    //   console.log(res);
    //   // navigate("/User");
    // }
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
                <li class="active"><Link to="/">sign-up</Link></li>
              </ul>
            </nav>

          </div></div>  </div></>
  )
}

export default Userlog