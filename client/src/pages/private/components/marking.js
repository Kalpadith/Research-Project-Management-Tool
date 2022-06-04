import * as React from "react";
import {useState} from "react";
import axios from "axios";
import {Link, useNavigate} from 'react-router-dom';



const Marking = () => {
    
    
    const [id, setId] = useState("");
    const [researchgrp_id, setResearchgrp_id] = useState("");
    const [submit_id, setSubmit_id] = useState("");
    const [requested_supervisor, setRequested_supervisor] = useState("");
    ;


    const navigate = useNavigate()


    async function handleSubmit(event) {
        event.preventDefault();
        const result = await axios.post('/markingScheme/', {
            id: id,
            researchgrp_id: researchgrp_id,
            submit_id: submit_id,
            requested_supervisor: requested_supervisor
        });

        if (result.status === 200 && result.data.success) {
           
            message: "success"
        }
           
        else {
           
            message: "error"
        }

    }


    return (
        <div className="container d-flex justify-content-center align-items-center" style={{
            width: '450px',
            height: '40vh',


        }}>
            
            <div>
                <center>
                <div className='h1'>Add New Marking Scheme</div>
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
                               <option disabled selected = "true">--Select a Marking Type--</option>
                               <option type="text" className="form-control"value= "Project report marking"  >Project report marking</option>
                               <option type="text" className="form-control" value="Viva marking" >Viva marking </option>
                               <option type="text" className="form-control" value="SRS Marking" >SRS Marking</option>
                               <option type="text" className="form-control"value= "Other"  >Other</option>
                               
                               
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


export default Marking;