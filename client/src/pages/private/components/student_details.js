import * as React from "react";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import axios from "axios";
// import { Modal } from "react-bootstrap";
// import UpdateUser from "./UpdateUser";


const Student_details = forwardRef((props, ref) => {

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

    // useEffect(() => {
    //     fetchData().then();
    // }, []);


    // async function fetchData() {
    //     const currentUser = JSON.parse(sessionStorage.getItem("user"));
    //     const result = await axios.get('/users/get?id=' + currentUser._id);
    //     if (result.status === 200) {
    //         setUsers(result.data);
    //     }
    // }

    useEffect(() => {
        const currentUser = JSON.parse(sessionStorage.getItem("user"));
        axios.get('/users/get?id=' + currentUser._id)
            .then(res => {
                setUsers(res.data[0]);
            })
            .catch(err => {
                console.log(err);
            });
    }, [])

    // const deleteUser = async (id) => {
    //     const result = await axios.delete(`/users/get?id=${id}`);
    //     if (result.status === 200) {
    //         await fetchData();
    //     }
    // };

    // async function showModal(event, hotel) {
    //     event.preventDefault();
    //     setUser(user);
    //     handleShow();
    // }

    // async function hideModel() {
    //     handleClose();
    //     setUser({});
    //     fetchData().then();
    // }

    return (
        <>
            <div className='mt-3'>
                <table className="table">
                    <thead>
                        <tr>
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
                            users.map(x => {
                                return (
                                     <tr key={x._id}>                                      
                                     <td>{x.user_Fname}</td>
                                     <td>{x.user_Lname}</td>
                                     <td>{x.user_designation}</td>
                                     <td>{x.user_role}</td>
                                     <td>{x.user_phone}</td>
                                     <td>{x.user_email}</td>
                                       <th scope="col">#</th>
                                        <td>
                                            <button className="btn btn-warning" onClick={(e) => showModal(e, x)}>
                                                <i className="las la-edit" />
                                            </button>
                                            {/* <button className="m-2 btn btn-danger" onClick={() => deleteUser(x?._id)}>
                                                <i className="las la-trash" />
                                            </button> */}
                                            <button className="btn btn-success"> <a href="/" style={{ textDecoration: 'none', color: 'black' }}>View more</a></button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

            {/* <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <UpdateUser user={user} hideModel={hideModel} />
                </Modal.Body>
            </Modal> */}
        </>

    )


});
export default Student_details;
