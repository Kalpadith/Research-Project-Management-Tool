import * as React from "react";
import {forwardRef, useEffect, useImperativeHandle, useState} from "react";
import axios from "axios";
import {Modal} from "react-bootstrap";
import AddOrUpdate from "./AddOrUpdate";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import {useNavigate} from "react-router-dom";


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


const ViewSubmissions = () => {

    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState({});

    const handleClickOpen = (value) => {
        setOpen(true);
        setSelectedValue(value);
    };

    const handleClose = (value) => {
        setOpen(false);
        fetchData().then();
    };


    const [submissiontypes, setSubmissiontypes] = useState([]);


    useEffect(() => {
        fetchData().then();
    }, []);


    async function fetchData() {
        const result = await axios.get('/submissionType');
        if (result.status === 200) {
            setSubmissiontypes(result.data);
        }
    }

    const deleteSubmission = async (id) => {
        const result = await axios.delete(`/submissionTypes?id=${id}`);
        if (result.status === 200) {
            await fetchData();
        }
    };


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
                        <th scope="col">Marks</th>
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
                                    <td> <span className={x?.marks > 50 ? 'text-success' : 'text-danger'} ><b>{x?.marks}</b></span> </td>

                                    <td>
                                        <Button variant="outlined" onClick={() => handleClickOpen(x)}>
                                            Evaluate
                                        </Button>

                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>


            <EvaluationDialog
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
            />

        </>

    )


};


function EvaluationDialog(props) {
    const {onClose, selectedValue, open} = props;
    const [marks, setMarks] = useState("");
    const [comment, setComment] = useState("");


    const handleClose = () => {
        onClose();
    };

    function validateForm() {
        return marks.length > 0 && comment.length > 0 ;
    }

    async function handleSubmit(event) {
        event.preventDefault();
       await axios.post('/submissionType/evaluation', {
            id: selectedValue._id,
            marks: marks,
            comment: comment
        });
        handleClose();
    }

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Add Evaluations</DialogTitle>
            <DialogContent>

                <form className='mt-3' onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label className="form-label">marks</label>
                        <input className="form-control" type="number"
                               value={selectedValue?.marks}
                               onChange={(e) => setMarks(e.target.value)}/>
                    </div>


                    <div className="mb-3">
                        <label className="form-label">comment</label>
                        <input className="form-control" type="String"
                               value={selectedValue?.comment}
                               onChange={(e) => setComment(e.target.value)}/>
                    </div>


                    {/*<Button type="submit" className="btn btn-primary w-100"*/}
                    {/*        disabled={!validateForm()}*/}
                    {/*        variant="contained">*/}
                    {/*    Submit*/}
                    {/*</Button>*/}
                    <DialogActions>
                        <Button disabled={!validateForm()} onClick={handleSubmit}> Add </Button>
                        <Button onClick={handleClose} autoFocus>
                            Close
                        </Button>
                    </DialogActions>
                </form>

            </DialogContent>

        </Dialog>
    );
}


//
// SimpleDialog.propTypes = {
//     onClose: PropTypes.func.isRequired,
//     open: PropTypes.bool.isRequired,
//     selectedValue: PropTypes.string.isRequired,
// };


export default ViewSubmissions;

