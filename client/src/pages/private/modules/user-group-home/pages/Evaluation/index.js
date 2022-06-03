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



                {/*export default () => ( <Popup trigger={<button className="button"> Open Modal </button>} modal nested > {close => ( <div className="modal"> <button className="close" onClick={close}> &times; </button> <div className="header"> Modal Title </div> <div className="content"> {' '} Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos? <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae? </div> <div className="actions"> <Popup trigger={<button className="button"> Trigger </button>} position="top center" nested > <span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni omnis delectus nemo, maxime molestiae dolorem numquam mollitia, voluptate ea, accusamus excepturi deleniti ratione sapiente! Laudantium, aperiam doloribus. Odit, aut. </span> </Popup> <button className="button" onClick={() => { console.log('modal closed '); close(); }} > close modal </button> </div> </div> )} </Popup>);*/}






            </form>
        </div>
    </div>)
}

export default Evaluation;
