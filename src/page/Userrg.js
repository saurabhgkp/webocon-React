import React, { useState } from 'react'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Userrg = () => {
  const navigate = useNavigate();

  const [fromData, setFromData] = useState({
    name: "",
    email: "",
    gender: "",
    password: "",
    phone: "",
    date: "",
  })
  const handelChange = (e) => {

    setFromData({ ...fromData, [e.target.name]: e.target.value });
  };
  const handelonSubmit = async () => {
    axios.post(
      "http://localhost:8080/user/register",
      fromData)
      .then(response => {
        if (response.status === 201) {
          navigate("/UserLogIn")
        }
        if (response.status === 200) {
          window.alert(response.message)
        }
        else {
          console.log("error");
        }
      })
      .catch(error => {
        console.error('Error:', error);
      })




    // fetch("http://localhost:8080/user/register", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     name, email, gender, password, phone, date
    //   })

    // }).then((res) => { navigate("/UserLogIn") }).catch((error => { console.log(error) }))

  }

  console.log(fromData);
  return (
    <>  <div class="container">
      <div class="row">
        <div class="col-md-6 mx-auto">
          <form>
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" class="form-control" name="name"
                onChange={handelChange}
                placeholder="Enter your name" />
            </div>
            <div class="form-group">
              <label for="email">Email address</label>
              <input type="email" class="form-control" name="email"
                onChange={handelChange}
                placeholder="Enter email" />
            </div>
            <div class="form-group">
              <label for="gender">Gender</label>
              <select class="form-control" name="gender" onChange={handelChange}>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div class="form-group">
              <label for="phone">Phone number</label>
              <input type="tel" class="form-control" name="phone"
                onChange={handelChange}
                placeholder="Enter phone number" />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" name="password"
                onChange={handelChange}
                placeholder="Password" />
            </div>
            <div class="form-group">
              <label for="date">Date</label>
              <input type="date" class="form-control" name="date"
                onChange={handelChange}
                placeholder="Enter date" />
            </div>
            <button type="submit" class="btn btn-primary" onClick={handelonSubmit}>Sign Up</button>
            <nav class="navbar">
              <ul class="nav navbar-nav">
                <li><Link to="/UserLogIn">LogIn</Link></li>
              </ul>
            </nav>
          </form>

        </div></div>
    </div></>
  )
}

export default Userrg