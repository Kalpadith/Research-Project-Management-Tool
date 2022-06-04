import * as React from "react";
import {useEffect, useState} from "react";
import User from "../../components/admin-user_manage";
import axios from "axios";
import UserPersonalDetails from "../../components/user-personal-details";
import {Avatar, Badge, Card, Divider, Typography} from "@mui/material";


const Admin = () => {

    const [user, setUser] = useState({
        user_Fname: '',
        user_Lname: '',
        user_designation: ''

    });

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const currentUser = JSON.parse(sessionStorage.getItem("user"));
        axios.get('/users/get')
            .then(res => {
                setUsers(res.data);
            })
            .catch(err => {
                console.log(err);
            });

        setUser(currentUser);
    }, [])


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid d-flex justify-content-between">

                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">
                            <b> Hi {user.user_Fname} </b>
                            <br/>
                            <small className='small'> Welcome back </small>
                        </a>
                    </div>
                </div>
            </nav>

            <div className='container mt-4'>
                <div className="row vh-80">
                    <div className="col-sm-4">
                        <UserPersonalDetails/>

                        <Card className="p-3 mt-2">

                            <div>
                                <div className='d-flex justify-content-between'>
                                    <small className='text-secondary fw-bold'> Total Users: </small>
                                    <small className='text-primary fw-bold'> {users.length} </small>
                                </div>
                            </div>
                            <Divider orientation="vertical" variant="middle" flexItem/>
                           
                            <div>
                                <div className='d-flex justify-content-between'>
                                    <small className='text-secondary fw-bold'> Administrators: </small>
                                    <small
                                        className='text-warning fw-bold'> {users.filter(x => x.user_role === 'admin').length} </small>
                                </div>
                            </div>
                            <Divider orientation="vertical" variant="middle" flexItem/>
                           
                            <div>
                                <div className='d-flex justify-content-between'>
                                    <small className='text-secondary fw-bold'> Supervisors: </small>
                                    <small
                                        className='text-warning fw-bold'> {users.filter(x => x.user_role === 'supervisor').length} </small>
                                </div>
                            </div>
                            <Divider orientation="vertical" variant="middle" flexItem/>

                            <div>
                                <div className='d-flex justify-content-between'>
                                    <small className='text-secondary fw-bold'> Students: </small>
                                    <small
                                        className='text-success fw-bold'> {users.filter(x => x.user_role === 'student').length} </small>
                                </div>
                            </div>
                        </Card>


                    </div>
                    <div className="col-sm-8">
                        <h6 className='mb-3'> User management </h6>
                        <div className="row">
                            {/* {
                                users.map(user => (
                                        <div className="col-sm-6">
                                            <User user={user}/>
                                        </div>
                                    )
                                )
                            } */}
                            
                                        <div className="col-sm-6">
                                            <User user={user}/>
                                        </div>
                                    
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Admin;
