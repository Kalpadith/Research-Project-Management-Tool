
// import axios from 'axios';
// import React, { Component } from 'react'



// export default class AllUsers extends Component {

//     constructor(props) {
//             super(props);

//             this.state = {
//                 Users: ([])

//             };
//         }

//     componentDidMount() {
//         this.retrieveUsers();
//     }


//     retrieveUsers() {
//         axios.get("http://localhost:5000/users/get").then(res => {
//             // if (res.data.success) {
//             //     this.setState({
//             //         data:res.data.existingUsers
//             //     });

//                 console.log(this.state.data)
//             // }


//         });
//     }


//     onDelete = (id) => {

//         axios.delete(`http://localhost:5000/users/delete/${id}`).then((res) => {
//             alert("User Deleted Successfully");
//             this.retrieveUsers();
//         })

//     }

//     filterData(Users, searchkey) {

//         const result = Users.filter((Users) =>

//         Users.user_role.includes(searchkey) 
//             // ||
//             // users.Income_Description.toLowerCase().includes(searchkey) ||
//             // users.Income_date.toLowerCase().includes(searchkey)
//         )

//         this.setState({ Users: result })
//     }

//     handleSearchArea = (e) => {

//         // const searchkey = e.currentTarget.value;

//         axios.get("http://localhost:5000/users/get").then(res => {
//             if (res.data.success) {

//                 this.filterData(res.data.existingUsers, searchkey)

//             }
//         });

//     }

//      render() {
//         return (
//          <> 
//             <header className='site-header sticky-top py-1'>

//             </header><div className="container">
//                     <div className="row">
//                         <div className="col-lg-9 mt-2 mb-2">
//                             <h4>All Users</h4>
//                         </div>
//                         <div className="col-lg-3 mt-2 mb-2">
//                             <input
//                                 className="form-control"
//                                 type="search"
//                                 placeholder="search by user role"
//                                 name="searchQuery"
//                                 aria-label="Search"
//                                 onChange={this.handleSearchArea}>

//                             </input>
//                         </div>
//                     </div>

//                     <table className="table">
//                         <thead>
//                             <tr>
//                                 <th scope="col">#</th>
//                                 <th scope="col">First name</th>
//                                 <th scope="col">Last name</th>
//                                 <th scope="col">Designation</th>
//                                 <th scope="col">Role</th>
//                                 <th scope="col">Phone</th>
//                                 <th scope="col">Email</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {this.state.Users.map((Users, index) => (
//                                 <tr key={index}>
//                                     <th scope="row"> {index + 1}</th>
//                                     <td>{Users.user_Fname}</td>
//                                     <td>{Users.user_Lname}</td>
//                                     <td>{Users.user_designation}</td>
//                                     <td>{Users.user_role}</td>
//                                     <td>{Users.user_phone}</td>
//                                     <td>{Users.user_email}</td>

//                                     <td>
//                                         <a className="btn btn-warning" href={`edit/${Users._id}`}>
//                                             <i className="fas fa-edit"></i>&nbsp;Update
//                                         </a>
//                                         &nbsp;
//                                         <a className="btn btn-danger" href="#" data-confirm="Are you sure to delete this item?" onClick={() => this.onDelete(Users._id)}>
//                                             <i className="far fa-trash-alt"></i>&nbsp;Delete
//                                         </a>


//                                     </td>
//                                 </tr>

//                             ))}
//                         </tbody>
//                     </table>

//                      </div></>
//         )
//      }
// }


import * as React from "react";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";
import AddOrUpdateUser from "./AddorUpdateUser";



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

    // filterData(users, searchkey) {

    //              const result = users.filter((users) =>
        
    //              users.user_role.includes(searchkey) 
    //                  // ||
    //                  // users.Income_Description.toLowerCase().includes(searchkey) ||
    //                  // users.Income_date.toLowerCase().includes(searchkey)
    //              )
        
    //              this.setState({ users: result })
    //          }

    // handleSearchArea = (e) => {

    //     const searchkey = e.currentTarget.value;

    //    axios.get("users/get").then(res => {
    //        if (res.data.success) {

    //            this.filterData(res.data.existingUsers, searchkey)

    //        }
    //    });
    // }
    return (
        <>
            <div className='mt-3'>
            {/* <div className="col-lg-3 mt-2 mb-2">
                             <input
                                 className="form-control"
                                 type="search"
                                 placeholder="search by user role"
                                 name="searchQuery"
                                 aria-label="Search"
                                onChange={this.handleSearchArea}>

                             </input>
                         </div> */}
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
                                            <button className="btn btn-warning" onClick={(e) => showModal(e, x)}>
                                                <i className="las la-edit" />
                                            </button>
                                            <button className="m-2 btn btn-danger" onClick={() => deleteUser(x?._id)}>
                                                <i className="las la-trash" />
                                            </button>
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
                    <AddOrUpdateUser user={user} hideModal={hideModal}/>
                </Modal.Body>
            </Modal>
</div>
           
            
        </>
        
    )


});
export default AllUsers;

