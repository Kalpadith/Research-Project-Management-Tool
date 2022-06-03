import * as React from "react";
import {useEffect, useState} from "react";
import axios from "axios";

const UpdatePresentation = ({presentations,hideModal}) => {

    if(!presentations)
    presentations = {};
   
    const [studentGroup_number, setstudentGroup_number] = useState("");
    const [presentationDate, setpresentationDate] = useState("");
    const [results, setresults] = useState("");
    const [panel_no, setpanel_no] = useState("");
    const [feedback, setfeedback] = useState("");
    

    useEffect(() => {

        if(presentations._id) {
            setstudentGroup_number(presentations.studentGroup_number);
            setpresentationDate(presentations.presentationDate);
            setresults(presentations.results);
            setpanel_no(presentations.panel_no);
            setfeedback(presentations.feedback);
            
            
            validateForm();
        }

    }, []);

    function validateForm() {
        if(presentations.studentGroup_number)
            return true;
        return studentGroup_number.length > 0 && presentationDate.length > 0 && results.length > 0 && panel_no.length > 0 && feedback.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if(presentations.studentGroup_number) {
            await axios.patch(`/presentation/?id=${presentations?._id}`, {
                studentGroup_number: studentGroup_number,
                presentationDate: presentationDate,
                results: results,
                panel_no: panel_no,
                feedback: feedback
               
            });
            hideModal({});
        } else {
            await axios.post(`/presentation/`, {
                studentGroup_number: studentGroup_number,
                presentationDate: presentationDate,
                results: results,
                panel_no: panel_no,
                feedback: feedback
            });
            hideModal();
        }
    }


    return (
        <div className="container">
            <div>
                <form className='mt-3' onSubmit={handleSubmit}>
                <div className="mb-3">
                        <label className="form-label">Student Group ID</label>
                        <input className="form-control"
                               type="text"
                               value={studentGroup_number}
                               onChange={(e) => setstudentGroup_number(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Date</label>
                        <input className="form-control"
                               type="date"
                               value={presentationDate}
                               onChange={(e) => setpresentationDate(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Results</label>
                        <input className="form-control" 
                               type="text"
                               value={results}
                               onChange={(e) => setresults(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Pannel Number</label>
                        <input className="form-control" type="text"
                               value={panel_no}
                               onChange={(e) => setpanel_no(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Feedback</label>
                        <input className="form-control" type="text"
                               value={feedback}
                               onChange={(e) => setfeedback(e.target.value)}/>
                    </div>

                    

                    <button type="submit" className="btn btn-primary w-100" disabled={!validateForm()}>
                        {presentations.studentGroup_number ? 'Update' : 'Update' }
                    </button>


                </form>
            </div>
        </div>
    )
}

export default UpdatePresentation;
