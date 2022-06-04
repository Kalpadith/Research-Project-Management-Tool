import * as React from "react";
import {useState} from "react";
import axios from "axios";
import {Link, useNavigate} from 'react-router-dom';



const Template = () => {
    
    
    const [id, setId] = useState("");
    const [researchgrp_id, setResearchgrp_id] = useState("");
    const [submit_id, setSubmit_id] = useState("");
    const [requested_supervisor, setRequested_supervisor] = useState("");
    ;


    const navigate = useNavigate()


    async function handleSubmit(event) {
        event.preventDefault();
        const result = await axios.post('/users/', {
            id: id,
            researchgrp_id: researchgrp_id,
            submit_id: submit_id,
            requested_supervisor: requested_supervisor
        });

        

    }


    return (
        <div className="container d-flex justify-content-center align-items-center" style={{
            width: '450px',
            height: '40vh',


        }}>
            
            <div>
                <center>
                <div className='h1'>Add New Submission Template</div>
                <div className="container" style = {{
                    width :'400px',
                    height:'50px',
                    borderColor:"black",
                    borderStyle:'solid',
                    justifyContent:'center'}}>
                    
                       
                        

                        <form className='mt-3' onSubmit={handleSubmit}>

                        <input type={'File'} ></input>
                    <div className="mb-3">
                        <div className="mb-3">
                        <br/>
                        

                        <br/>
                           <select type="text" className="form-control" name="taxi_type" placeholder="Select a taxi type">
                               <option disabled selected = "true">--Select a Submisson Template Type--</option>
                               <option type="text" className="form-control"value= "Project Proposal"  >Project Proposal</option>
                               <option type="text" className="form-control" value="Progress Presentation" >Progress presentation </option>
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


export default Template;