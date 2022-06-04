// import * as React from "react";
// import {useState} from "react";
// import axios from "axios";
// import {Link, useNavigate} from 'react-router-dom';


// const Request_Supervisor = () => {


//     const [id, setId] = useState("");
//     const [researchgrp_id, setResearchgrp_id] = useState("");
//     const [research_name, setResearch_name] = useState("");
//     const [requested_supervisor, setRequested_supervisor] = useState("");
//     ;


//     const navigate = useNavigate()


//     async function handleSubmit(event) {
//         event.preventDefault();
//         const result = await axios.post('/users/', {
//             id: id,
//             researchgrp_id: researchgrp_id,
//             research_name: research_name,
//             requested_supervisor: requested_supervisor
//         });

//         if (result.status === 200 && result.data.success) {
//             // localStorage.setItem('user', JSON.stringify(result.data.user));
//             // localStorage.setItem('email', email);

//             message: "success"
//         }
//             // if (result.data.user.type === 'customer')
//         //     navigate('/customer')
//         else {
//             /// navigate('/trader')
//             message: "error"
//         }

//     }


//     return (
//         <div className="container d-flex justify-content-center align-items-center" style={{
//             width: '450px',
//             height: '100vh',
//         }}>
//             <div>
//                 <div className='h1'>Request Supervisor</div>
//                 <form className='mt-3' onSubmit={handleSubmit}>
//                     <div className="mb-3">
//                         <div className="mb-3">


//                             <label className="form-label">Student ID</label>
//                             <input className="form-control" autoFocus
//                                    type="id"
//                                    value={id}
//                                    onChange={(e) => setId(e.target.value)}/>

//                             <label className="form-label">Research Group ID</label>
//                             <input className="form-control" autoFocus
//                                    type="researchgrp_id"
//                                    value={researchgrp_id}
//                                    onChange={(e) => setResearchgrp_id(e.target.value)}/>

//                             <label className="form-label">Requested Supervisor/Co-Supervisor</label>
//                             <input className="form-control" autoFocus
//                                    type="requested_supervisor"
//                                    value={requested_supervisor}
//                                    onChange={(e) => setRequested_supervisor(e.target.value)}/>



//                         </div>

//                     </div>



//                     <button type="submit" className="btn btn-primary w-100" >Submit
//                     </button>



//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Request_Supervisor;


import * as React from "react";
import {useEffect, useState} from "react";
import axios from "axios";


const Request_Supervisor = ({research}) => {

    if(!research)
        research = {};

            // const [id, setId] = useState("");
            const [researchgrp_id, setResearchgrp_id] = useState("");
            const [research_name, setResearch_name] = useState("");
            const [requested_supervisor, setRequested_supervisor] = useState("");
            ;

    useEffect(() => {

        if(research.researchgrp_id) {
            setResearchgrp_id(research.researchgrp_id);
            setResearch_name(research.research_name);
            setRequested_supervisor(research.requested_supervisor);
            validateForm();
        }

    }, []);

    function validateForm() {
        if(research.researchgrp_id)
            return true;
        return researchgrp_id.length > 0 && research_name.length > 0 && requested_supervisor.length > 0 ;
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if(research.researchgrp_id) {
            await axios.patch(`/research/update?id=${research?._id}`, {
              //  researchgrp_id: researchgrp_id,
                research_name: research_name,
                requested_supervisor: requested_supervisor
            });
            // hideModel({});
        } else {
            await axios.post(`/research/`, {
                researchgrp_id: researchgrp_id,
                research_name: research_name,
                requested_supervisor: requested_supervisor
            });
            // hideModel();
        }
    }


    return (
        <>
        
        <div className="container">
            <div>
            <div className='h1' align='center'>Request Supervisor</div>
            <br/><br/>
            
                <form className='mt-3' onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Research grp_id</label>
                        <input className="form-control"
                               type="text"
                               disabled={!!research.researchgrp_id}
                               value={researchgrp_id}
                               onChange={(e) => setResearchgrp_id(e.target.value)}/>
                    </div>
                    <br/>

                    <div className="mb-3">
                        <label className="form-label">Research Topic</label>
                        <input className="form-control" 
                                type="text"
                               value={research_name}
                               onChange={(e) => setResearch_name(e.target.value)}/>
                    </div>
                    <br/>

                    <div className="mb-3">
                        <label className="form-label">Requested supervisor</label>
                        <input className="form-control" 
                                type="text"
                               value={requested_supervisor}
                               onChange={(e) => setRequested_supervisor(e.target.value)}/>
                    </div>

                    <br/><br/><br/>
                    <button type="submit" className="btn btn-primary w-100" disabled={!validateForm()}>
                        {research.researchgrp_id ? 'Update' : 'Add' }
                    </button>
                    <br/><br/> <br/><br/>


                </form>
            </div>
        </div></>
    )
}

export default Request_Supervisor;
