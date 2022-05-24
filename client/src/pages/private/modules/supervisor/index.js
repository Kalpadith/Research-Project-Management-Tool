import * as React from "react";
import {useEffect, useState} from "react";
import UserGroup from "../../components/user-group";
import axios from "axios";
import UserPersonalDetails from "../../components/user-personal-details";
import {Avatar, Badge, Card, Divider, Typography} from "@mui/material";


const Supervisor = () => {

    const [user, setUser] = useState({
        user_Fname: '',
        user_Lname: '',
        user_designation: ''

    });

    const [groups, setGroups] = useState([]);

    useEffect(() => {
        const currentUser = JSON.parse(sessionStorage.getItem("user"));
        axios.get('/groups/user?id=' + currentUser._id)
            .then(res => {
                setGroups(res.data);
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
                                    <small className='text-secondary fw-bold'> Total Groups: </small>
                                    <small className='text-primary fw-bold'> {groups.length} </small>
                                </div>
                            </div>
                            <Divider orientation="vertical" variant="middle" flexItem/>

                            <div>
                                <div className='d-flex justify-content-between'>
                                    <small className='text-secondary fw-bold'> Pending Groups: </small>
                                    <small
                                        className='text-warning fw-bold'> {groups.filter(x => x.supervisor_approval === 'Pending').length} </small>
                                </div>
                            </div>
                            <Divider orientation="vertical" variant="middle" flexItem/>

                            <div>
                                <div className='d-flex justify-content-between'>
                                    <small className='text-secondary fw-bold'> Approved Groups: </small>
                                    <small
                                        className='text-success fw-bold'> {groups.filter(x => x.supervisor_approval === 'Approved').length} </small>
                                </div>
                            </div>
                        </Card>


                    </div>
                    <div className="col-sm-8">
                        <h6 className='mb-3'> Groups </h6>
                        <div className="row">
                            {
                                groups.map(group => (
                                        <div className="col-sm-6" key={group._id}>
                                            <UserGroup group={group}/>
                                        </div>
                                    )
                                )
                            }
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Supervisor;
