// import React, {useEffect, useState} from 'react';
// import {makeStyles} from '@mui/styles';
// import Divider from '@mui/material/Divider';
// import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Avatar from '@mui/material/Avatar';
// import Fab from '@mui/material/Fab';
// import SendIcon from '@mui/icons-material/Send';
// import store from "@core/store";
// import {useParams} from "react-router-dom";
// import axios from "axios";
// // import Message from "./message";
// import {socket} from "@core/service/socket";
// import {Button, Card, CardActions, CardContent} from "@mui/material";
// import UserPersonalDetails from "../../../../components/user-personal-details";
// import UserGroup from "../../../../components/user-group";
//
//
// const useStyles = makeStyles({
//     table: {
//         minWidth: 650,
//     },
//     chatSection: {
//         width: '100%',
//         height: '80vh'
//     },
//     headBG: {
//         backgroundColor: '#e0e0e0'
//     },
//     borderRight500: {
//         borderRight: '1px solid #e0e0e0'
//     },
//
// });
//
// const GroupDetails = () => {
//
//     const classes = useStyles();
//     const {id} = useParams();
//     const [users, setUsers] = useState([]);
//     const [currentUser, setCurrentUser] = useState({});
//
//     useEffect(() => {
//         const currentUser = JSON.parse(sessionStorage.getItem("user"));
//         setCurrentUser(currentUser);
//         setUsers(store.getState().groupUserHome.users);
//
//         store.subscribe(() => {
//             setUsers(store.getState().groupUserHome.users);
//         })
//
//
//     }, []);
//
//
//     return (
//
//         <div className='position-relative'>
//             <div className='row'>
//                 <div className="col-sm-4 rounded-3 pt-2" style={{
//                     background: '#F3F2F1'
//                 }}>
//                     <Typography variant="caption" className="mt-4"> <b> Group Members </b> </Typography>
//
//                     <List>
//
//                         {users.map(user => (
//                             <ListItem key={user._id} button>
//                                 <ListItemIcon>
//                                     <Avatar alt={user.user_Fname} src={user.user_avatar}/>
//                                 </ListItemIcon>
//                                 <ListItemText primary={user.user_Fname + ' ' + user.user_Lname}/>
//
//                             </ListItem>
//                         ))}
//                     </List>
//
//
//                     {/*<List>*/}
//
//                     {/*    {users.map(user => (*/}
//                     {/*        <ListItem key={user._id} button>*/}
//
//
//                                 {/*<ListItemText primary={user.user_Fname + ' ' + user.user_Lname + ' ' + user. user_designation + ' ' + user.user_email}/>*/}
//                                 {/*<ListItemText primary={user.user_Lname + ' ' + user.user_Lname}/>*/}
//                                 {/*<ListItemText primary={user. user_designation + ' ' + user. user_designation}/>*/}
//                                 {/*<ListItemText primary={user.user_email + ' ' + user.user_email}/>*/}
//
//
//
//
//
//
//
//                     {/*        </ListItem>*/}
//                     {/*    ))}*/}
//                     {/*</List>*/}
//
//
//
//                 </div>
//
//
//
//
//             </div>
//
//         </div>
//
//
//
//
//
//
//
//     );
//
// }
//
//
//


//
// export default GroupDetails;
// import * as React from "react";
// import ViewMarks from "./ViewMarks";
// // import AddOrUpdate from "./AddOrUpdate";
// import {useRef, useState} from "react";
// // import {Button, Modal} from "react-bootstrap";
//
// export const GroupDetails = () => {
//
//     const childRef = useRef();
//
//     const [show, setShow] = useState(false);
//
//     const handleClose = () => {
//         setShow(false)
//         childRef.current?.callEvaluationsList();
//     };
//
//     const handleShow = () => setShow(true);

    // return (
    //     <>
    //         <div>
    //             <div className="text-end">
    //                 <Button variant="primary" onClick={handleShow}>
    //
    //                     <i className="las la-plus-circle"/> Add Evaluation
    //                 </Button>
    //             </div>
    //             <ViewSubmission ref={childRef}/>
    //         </div>
    //
    //         <Modal show={show} onHide={handleClose}>
    //             <Modal.Header closeButton>
    //                 <Modal.Title>Add Evaluation</Modal.Title>
    //             </Modal.Header>
    //             <Modal.Body>
    //                 <AddOrUpdate hideModel={handleClose}/>
    //             </Modal.Body>
    //         </Modal>
    //     </>
    //
    // );
// };
//  export default GroupDetails;

import * as React from "react";
import ViewMarks from "./ViewMarks";
// import AddOrUpdate from "./AddOrUpdate";
import {useRef, useState} from "react";
// import {Button, Modal} from "react-bootstrap";

export const Evaluations = () => {

    const childRef = useRef();

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
        childRef.current?.callEvaluationsList();
    };

    const handleShow = () => setShow(true);

    return (
        <>
            <div>
                {/*<div className="text-end">*/}
                {/*    <Button variant="primary" onClick={handleShow}>*/}

                {/*        <i className="las la-plus-circle"/> Add Evaluation*/}
                {/*    </Button>*/}
                {/*</div>*/}
                <ViewMarks ref={childRef}/>
            </div>

            {/*<Modal show={show} onHide={handleClose}>*/}
            {/*    <Modal.Header closeButton>*/}
            {/*        <Modal.Title>Add Evaluation</Modal.Title>*/}
            {/*    </Modal.Header>*/}
            {/*    <Modal.Body>*/}
            {/*        <AddOrUpdate hideModel={handleClose}/>*/}
            {/*    </Modal.Body>*/}
            {/*</Modal>*/}
        </>

    );
};
