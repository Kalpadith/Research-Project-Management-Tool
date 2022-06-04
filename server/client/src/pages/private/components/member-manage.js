import * as React from "react";
import {useState} from "react";
import axios from "axios";
import {Link, useNavigate} from 'react-router-dom';


const Add_Presentation = () => {


    
    const [studentGroup_number, setstudentGroup_number] = useState("");
    const [presentationDate, setpresentationDate] = useState("");
    const [results, setresults] = useState("");
    const [panel_no, setpanel_no] = useState("");
    const [feedback, setfeedback] = useState("");
    ;


    const navigate = useNavigate()


    async function handleSubmit(event) {
        event.preventDefault();
        const result = await axios.post('/presentation/', {
            
            studentGroup_number: studentGroup_number,
            presentationDate: presentationDate,
            results: results,
            panel_no: panel_no,
            feedback: feedback
        });

        if (result.status === 200 && result.data.success) {
            // localStorage.setItem('user', JSON.stringify(result.data.user));
            // localStorage.setItem('email', email);
            alart('Presentation added')
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
                <div className='h1'>Add Presentations</div>
                <form className='mt-3' onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <div className="mb-3">


                            <label className="form-label">Student Group</label>
                            <input className="form-control" autoFocus
                                   type="text"
                                   value={studentGroup_number}
                                   onChange={(e) => setstudentGroup_number(e.target.value)}/>

                            <label className="form-label">Presentation Date</label>
                            <input className="form-control" autoFocus
                                   type="date"
                                   value={presentationDate}
                                   onChange={(e) => setpresentationDate(e.target.value)}/>
                                   
                                   <label className="form-label">Result</label>
                            <input className="form-control" autoFocus
                                   type="text"
                                   value={results}
                                   onChange={(e) => setresults(e.target.value)}/>
                                    

                            <label className="form-label">Pannel Number</label>
                            <input className="form-control" autoFocus
                                   type="text"
                                   value={panel_no}
                                   onChange={(e) => setpanel_no(e.target.value)}/>
                                   
                                   <label className="form-label">Feedback</label>
                            <input className="form-control" autoFocus
                                   type="text"
                                   value={feedback}
                                   onChange={(e) => setfeedback(e.target.value)}/>
                                    
                                    


                        </div>

                    </div>



                    <button type="submit" className="btn btn-primary w-100" >Submit
                    </button>



                </form>
            </div>
        </div>
    )
}

export default Add_Presentation;
