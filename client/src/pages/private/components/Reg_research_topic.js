import * as React from "react";
import {useState} from "react";
import axios from "axios";
import {Link, useNavigate} from 'react-router-dom';


const Reg_Research_Topic = () => {


    const [id, setId] = useState("");
    const [researchgrp_id, setResearchgrp_id] = useState("");
    const [research_name, setReg_Research_Topic] = useState("");
    ;


    const navigate = useNavigate()


    async function handleSubmit(event) {
        event.preventDefault();
        const result = await axios.post('/research/', {
            id: id,
            researchgrp_id: researchgrp_id,
            research_name: research_name
        });

        if (result.status === 200 && result.data.success) {
            // localStorage.setItem('user', JSON.stringify(result.data.user));
            // localStorage.setItem('email', email);
            alart('Research Topic Registered')
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
        <div className="container d-flex justify-content-center align-items-center" style={{
            width: '450px',
            height: '100vh',
        }}>
            <div>
                <div className='h1'>Register Research Topic</div>
                <form className='mt-3' onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <div className="mb-3">


                            <label className="form-label">Student ID</label>
                            <input className="form-control" autoFocus
                                   type="id"
                                   value={id}
                                   onChange={(e) => setId(e.target.value)}/>

                            <label className="form-label">Research Group ID</label>
                            <input className="form-control" autoFocus
                                   type="researchgrp_id"
                                   value={researchgrp_id}
                                   onChange={(e) => setResearchgrp_id(e.target.value)}/>

                            <label className="form-label">Research Topic</label>
                            <input className="form-control" autoFocus
                                   type="research_name"
                                   value={research_name}
                                   onChange={(e) => setReg_Research_Topic(e.target.value)}/>



                        </div>

                    </div>



                    <button type="submit" className="btn btn-primary w-100" >Submit
                    </button>



                </form>
            </div>
        </div>
    )
}

export default Reg_Research_Topic;
