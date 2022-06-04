import * as React from "react";
import {useState} from "react";
import axios from "axios";
import {Link, useNavigate} from 'react-router-dom';
// import React, {useMemo} from 'react';
// import {useDropzone} from 'react-dropzone';


const Submit = () => {
    
    
    const [id, setId] = useState("");
    const [studentgroup_no, setstudentgroup_no] = useState("");
    const [submit_id, setSubmit_id] = useState("");
    const [requested_supervisor, setRequested_supervisor] = useState("");
    const [Submission_category, setSubmission_category] = useState("");
    const [File, setFile] = useState("");
    ;


    const navigate = useNavigate()


    async function handleSubmit(event) {
        event.preventDefault();
        const result = await axios.post('/submissionType/', {
            id: id,
            studentgroup_no: studentgroup_no,
            submit_id: submit_id,
            requested_supervisor: requested_supervisor,
            Submission_category: Submission_category,
            File: File
        });

        if (result.status === 200 && result.data.success) {
            // localStorage.setItem('user', JSON.stringify(result.data.user));
            // localStorage.setItem('email', email);

            message: "success"
        }
            // if (result.data.user.type === 'customer')
        //     navigate('/customer')
        else {
            /// navigate('/trader')
            message: "error"
        }

    }


    return (
        <div className="container" style={{
            width: '450px',
            height: '100vh',
        }}>
            
            <div>
                <center>
                <div className='h1'>Submissions</div>
                <div className="container" style = {{
                    width :'400px',
                    height:'50px',
                    borderColor:"black",
                    borderStyle:'solid',
                    justifyContent:'center'}}>
                    
                       
                        <input type={'File'} value={File} style={{marginTop :"6px" }} onChange={(e) => setFile(e.target.value)} ></input>

                        <br/>
                        <form className='mt-3' onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <div className="mb-3">
                        <br/>
                        <label className="form-label">Submission ID</label>
                            <input className="form-control" autoFocus
                                   type="submit_id"
                                   value={submit_id}
                                   onChange={(e) => setSubmit_id(e.target.value)}/>

                              
                            <label className="form-label">Research Group ID</label>
                            <input className="form-control" autoFocus
                                   type="studentgroup_no"
                                   value={studentgroup_no}
                                   onChange={(e) => setstudentgroup_no(e.target.value)}/>


                            {/* <label className="form-label">Submission Type</label>
                            <input className="form-control" autoFocus
                                   type="id"
                                   value={id}
                                   onChange={(e) => setId(e.target.value)}/> */}

                        <br/>
                           <select type="text" className="form-control" name="Submission_category" placeholder="Select a Submisson type" onChange={(e) => setSubmission_category(e.target.value)}>
                               <option disabled selected = "true">--Select a Submisson Type--</option>
                               <option type="text" className="form-control"value= "Project Proposal"  >Project Proposal</option>
                               <option type="text" className="form-control" value="Progress Presentation" >Progress Presentation </option>
                               <option type="text" className="form-control" value="Final Report" >Final Report</option>
                               <option type="text" className="form-control"value= "Research Project"  >Research Project</option>
                               <option type="text" className="form-control" value="Thesis" >Thesis </option>
                               
                               </select>

                        </div>

                    </div>

                    <button type="submit" className="btn btn-primary w-100" >Submit
                    </button><br/><br/><br/><br/><br/><br/><br/><br/>


                    
                </form>
                    </div>


                </center>

            </div>
        </div>
    )
};


export default Submit;