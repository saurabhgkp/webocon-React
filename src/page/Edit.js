import React, { useState, useEffect } from 'react'
import axios from "axios";
const Edit = () => {

    const [id, setId] = (localStorage.getItem('userId'));
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
    const handelonSubmit = async (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8080/user/userEdit?id=${id}`, fromData, {
            params: {
                id: id
            },
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => {
            //  navigate('/pages')
        }).catch((err) => console.log(err))
    }

    useEffect(() => {
        const id = localStorage.getItem('userId');
        axios.get(`http://localhost:8080/user/userDetails?id=${id}`).then(response => {
            setFromData(response.data.data);
        }).catch(error => {
            console.error(error);
        });
    }, [id]);
    console.log(fromData, "=-=-==-9-09=-=-0=-0=");

    return (
        <>
            <div class="container ">
                <div class="row">
                    <div class="col-md-6 mx-auto">
                        <h1>Update Profile</h1>
                        <form>
                            <div class="form-group">
                                <h2 className='text-danger'>{fromData.status}</h2>
                            </div>
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" class="form-control" name="name"
                                    value={fromData.name}

                                    onChange={handelChange}
                                />
                            </div>

                            <div class="form-group">
                                <label for="gender">Gender</label>
                                <select class="form-control" name="gender" onChange={handelChange}
                                    value={fromData.gender}>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="phone">Phone number</label>
                                <input type="tel" class="form-control" name="phone"
                                    onChange={handelChange}
                                    value={fromData.phone} />
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" class="form-control" name="password"
                                    onChange={handelChange}
                                    placeholder="New Password" />
                            </div>
                            <div class="form-group">
                                <label for="date">Date</label>
                                <input type="date" class="form-control" name="date"
                                    onChange={handelChange}
                                    value={fromData.date}
                                />
                            </div>
                            <button type="submit" class="btn btn-primary" onClick={handelonSubmit}>Update</button>
                        </form>
                    </div></div>
            </div>
        </>
    )
}

export default Edit