import * as React from "react";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
// import React from 'react';import Popup from 'reactjs-popup';
import {Button} from "@mui/material";





const Evaluation = () => {
    // JUST FOR DEV SPREED
    // const [studentGroupId, setStudentGroupId] = useState("");
    // const [submissionId, setSubmissionId] = useState("");
    const [marks, setMarks] = useState("");
    const [comment, setComment] = useState("");

    const navigate = useNavigate()

    function validateForm() {
        return marks.length > 0 && comment.length > 0 ;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const result = await axios.post('/addEvaluation', {

            marks: marks,
            comment: comment
        });
        // if (result.status === 200) {
        //
        //     navigate('/Evaluation')
        //
        // }
        // else{
        //     navigate('/')
        // }




    }



    return (<div className="container d-flex justify-content-center align-items-center" style={{
        width: '450px', height: '100vh',
    }}>
        <div>
            <div className='h1'>Evaluation</div>
            <form className='mt-3' onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label className="form-label">marks</label>
                    <input className="form-control" type="number"
                           value={marks}
                           onChange={(e) => setMarks(e.target.value)}/>
                </div>


                <div className="mb-3">
                    <label className="form-label">comment</label>
                    <input className="form-control" type="String"
                           value={comment}
                           onChange={(e) => setComment(e.target.value)}/>
                </div>


                <Button type="submit" className="btn btn-primary w-100"
                        disabled={!validateForm()}
                        variant="contained">
                    Submit
                </Button>





            </form>
        </div>
    </div>)
}

export default Evaluation;
