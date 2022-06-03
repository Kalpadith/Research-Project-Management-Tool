import * as React from "react";
import {forwardRef, useEffect, useImperativeHandle, useState} from "react";
import axios from "axios";
import {Modal} from "react-bootstrap";
import AddOrUpdate from "./AddOrUpdate";


// import Button from '@mui/material/Button';
// import Avatar from '@mui/material/Avatar';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import ListItemText from '@mui/material/ListItemText';
// import DialogTitle from '@mui/material/DialogTitle';
// import Dialog from '@mui/material/Dialog';
// import PersonIcon from '@mui/icons-material/Person';
// import AddIcon from '@mui/icons-material/Add';
// import Typography from '@mui/material/Typography';
// import { blue } from '@mui/material/colors';
//
// const emails = ['username@gmail.com', 'user02@gmail.com'];


const ViewSubmissions = forwardRef((props, ref) => {

    const [open, setOpen] = React.useState(false);
    // const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };






    const [submissiontypes, setSubmissiontypes] = useState([]);
    const [submission, setSubmission] = useState({});


    useImperativeHandle(ref, () => ({
        callSubmissionList() {
            fetchData().then()
        }

    }));

    useEffect(() => {
        fetchData().then();
    }, []);


    async function fetchData() {
        const result = await axios.get('/submissiontypes');
        if (result.status === 200) {
            setSubmissiontypes(result.data);
        }
    }

    const deleteSubmission = async (id) => {
        const result = await axios.delete(`/submissiontypes?id=${id}`);
        if (result.status === 200) {
            await fetchData();
        }
    };

    async function showModal(event, submission) {
        event.preventDefault();
        setSubmission(submission);
        handleShow();
    }

    async function hideModel() {
        handleClose();
        setSubmissiontypes({});
        fetchData().then();
    }

    return (
        <>
            <div className='mt-3'>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Document</th>
                        <th scope="col">Due Date</th>
                        <th scope="col">Submission</th>
                        <th scope="col">Student Group No</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        submissiontypes?.map(x => {
                            return (
                                <tr key={x._id}>
                                    <td>{x.submission_id}</td>
                                    <td>{x.submission_name}</td>
                                    <td>{x.Submission_category}</td>
                                    <td>{x.document}</td>
                                    <td>{x.due_date}</td>
                                    <td>{x.submission}</td>
                                    <td>{x.studentgroup_no}</td>


                                    <td>
                                        {/*<button className="btn btn-warning" onClick={(e) => showModal(e, x)}>*/}
                                        {/*    <i className="las la-edit"/>*/}
                                        {/*</button>*/}
                                        {/*<button className="m-2 btn btn-danger" onClick={() => deleteSubmission(x?._id)}>*/}
                                        {/*    <i className="las la-trash"/>*/}
                                        {/*</button>*/}
                                        <button className="btn btn-success"> <a href="/user-group/6267859b42903af98a604116/evaluation" style={{ textDecoration: 'none', color: 'black' }}>Evaluate</a></button>
                                        {/*<Button variant="outlined" onClick={handleClickOpen}>*/}
                                        {/*    Open simple dialog*/}
                                        {/*</Button>*/}

                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>



            {/*<SimpleDialog*/}
            {/*    selectedValue={selectedValue}*/}
            {/*    open={open}*/}
            {/*    onClose={handleClose}*/}
            {/*/>*/}


            {/*<Modal show={show} onHide={handleClose}>*/}
            {/*    <Modal.Header closeButton>*/}
            {/*        <Modal.Title>Update Evaluation</Modal.Title>*/}
            {/*    </Modal.Header>*/}
            {/*    <Modal.Body>*/}
            {/*        <AddOrUpdate submissions={submission} hideModel={hideModel}/>*/}
            {/*    </Modal.Body>*/}
            {/*</Modal>*/}
        </>

    )


});


//
// function SimpleDialog(props) {
//     const { onClose, selectedValue, open } = props;
//
//     const handleClose = () => {
//         onClose(selectedValue);
//     };
//
//     const handleListItemClick = (value) => {
//         onClose(value);
//     };
//
//     return (
//         <Dialog onClose={handleClose} open={open}>
//             <DialogTitle>Set backup account</DialogTitle>
//             <List sx={{ pt: 0 }}>
//                 {emails.map((email) => (
//                     <ListItem button onClick={() => handleListItemClick(email)} key={email}>
//                         <ListItemAvatar>
//                             <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
//                                 <PersonIcon />
//                             </Avatar>
//                         </ListItemAvatar>
//                         <ListItemText primary={email} />
//                     </ListItem>
//                 ))}
//
//                 <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
//                     <ListItemAvatar>
//                         <Avatar>
//                             <AddIcon />
//                         </Avatar>
//                     </ListItemAvatar>
//                     <ListItemText primary="Add account" />
//                 </ListItem>
//             </List>
//         </Dialog>
//     );
// }
//

//
// SimpleDialog.propTypes = {
//     onClose: PropTypes.func.isRequired,
//     open: PropTypes.bool.isRequired,
//     selectedValue: PropTypes.string.isRequired,
// };



export default ViewSubmissions;

