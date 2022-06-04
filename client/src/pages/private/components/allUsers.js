import * as React from "react";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";
import AddOrUpdateUser from "./AddorUpdateUser";
import SearchBox from "./SearchBox";
import {Button} from "@mui/material";



const AllUsers = forwardRef((props, ref) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});


    useImperativeHandle(ref, () => ({
        callUserList() {
            fetchData().then()
        }

    }));

    useEffect(() => {
        fetchData().then();
    }, []);


    async function fetchData() {
        const result = await axios.get('/users/get');
        if (result.status === 200) {
            setUsers(result.data);
        }
    }

    const deleteUser = async (id) => {
        const result = await axios.delete(`/users/delete?id=${id}`);
        if (result.status === 200) {
            await fetchData();
        }
    };

    async function showModal(event, user) {
        event.preventDefault();
        setUser(user);
        handleShow();
    }

    async function hideModal() {
        handleClose();
        setUser({});
        fetchData().then();
    }


    return (
        <>
            <div className='mt-3'>
                <SearchBox />
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">User ID</th>
                            <th scope="col">First name</th>
                            <th scope="col">Last name</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Role</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map(x => {
                                return (
                                    <tr key={x._id}>
                                        <td>{x.user_id}</td>
                                        <td>{x.user_Fname}</td>
                                        <td>{x.user_Lname}</td>
                                        <td>{x.user_designation}</td>
                                        <td>{x.user_role}</td>
                                        <td>{x.user_phone}</td>
                                        <td>{x.user_email}</td>
                                        {/* <th scope="col">#</th> */}
                                        <td>
                                            
                                          
                                            <Button  onClick={(e) => showModal(e, x)} variant="contained" color="success">
                                            Update
                                            </Button>
                                            <Button  onClick={() => deleteUser(x?._id)} variant="outlined" color="error">
                                                Delete
                                            </Button>
                                           
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddOrUpdateUser user={user} hideModal={hideModal} />
                    </Modal.Body>
                </Modal>
            </div>


        </>

    )


});
export default AllUsers;
