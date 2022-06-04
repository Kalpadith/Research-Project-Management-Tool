// import * as React from "react";
// import {useEffect, useState} from "react";
// import axios from "axios";
//
// const AddOrUpdate = ({submissiontypes,hideModel}) => {
//
//     if(!submission)
//         submissiontypes = {};
//
//     const [submission_id, setSubmission_id] = useState("");
//     const [submission_name, setSubmission_name] = useState("");
//     const [Submission_category, setSubmission_category] = useState("");
//     const [document, setDocument] = useState("")
//     const [due_date, setDue_date] = useState("")
//     const [submission, setSubmission] = useState("")
//     const [studentgroup_no, setStudentgroup_no] = useState("")
//
//     useEffect(() => {
//
//         if(submission.submission_id) {
//             setSubmission_id(submission.submission_id);
//             setSubmission_name(submission.submission_name);
//             setSubmission_category(submission.Submission_category);
//             setDocument(submission.document);
//             setDue_date(submission.due_date);
//             setSubmission(submission.submission);
//             setStudentgroup_no(submission.studentgroup_no);
//             validateForm();
//         }
//
//     }, []);
//
//     function validateForm() {
//         if(submission.submission_id)
//             return true;
//         return submission_id.length > 0 && submission_name.length > 0 && Submission_category.length > 0 && document.length > 0 && due_date.length > 0 && studentgroup_no > 0;
//     }
//
//     async function handleSubmit(event) {
//         event.preventDefault();
//
//         if(submission.submission_id) {
//             await axios.put(`submission?id=${submission?._id}`, {
//                 submission_name: submission_name,
//                 Submission_category: Submission_category,
//                 document: document,
//                 due_date: due_date,
//                 submission: submission,
//                 studentgroup_no: studentgroup_no
//
//
//             });
//             hideModel({});
//         } else {
//             await axios.post(`/submissiontypes`, {
//                 submission_id: submission_id,
//                 submission_name: submission_name,
//                 Submission_category: Submission_category,
//                 document: document,
//                 due_date: due_date,
//                 submission: submission,
//                 studentgroup_no: studentgroup_no
//             });
//             hideModel();
//         }
//     }
//
//
//     return (
//         <div className="container">
//             <div>
//                 <form className='mt-3' onSubmit={handleSubmit}>
//                     <div className="mb-3">
//                         <label className="form-label">submission_id</label>
//                         <input className="form-control"
//                                type="Number"
//                                disabled={!!submission.submission_id}
//                                value={submission_id}
//                                onChange={(e) => setSubmission_id(e.target.value)}/>
//                     </div>
//                     <div className="mb-3">
//                         <label className="form-label">submission_name</label>
//                         <input className="form-control" type="text"
//                                value={submission_name}
//                                onChange={(e) => setSubmission_name(e.target.value)}/>
//                     </div>
//
//                     <div className="mb-3">
//                         <label className="form-label">Submission_category</label>
//                         <input className="form-control" type="text"
//                                value={Submission_category}
//                                onChange={(e) => setSubmission_category(e.target.value)}/>
//                     </div>
//
//                     <div className="mb-3">
//                         <label className="form-label">document</label>
//                         <input className="form-control" type="text"
//                                value={document}
//                                onChange={(e) => setDocument(e.target.value)}/>
//                     </div>
//
//
//                     <div className="mb-3">
//                         <label className="form-label">due_date</label>
//                         <input className="form-control" type="text"
//                                value={due_date}
//                                onChange={(e) => setDue_date(e.target.value)}/>
//                     </div>
//
//                     <div className="mb-3">
//                         <label className="form-label">submission</label>
//                         <input className="form-control" type="text"
//                                value={submission}
//                                onChange={(e) => setSubmission(e.target.value)}/>
//                     </div>
//
//                     <div className="mb-3">
//                         <label className="form-label">studentgroup_no</label>
//                         <input className="form-control" type="text"
//                                value={studentgroup_no}
//                                onChange={(e) => setStudentgroup_no(e.target.value)}/>
//                     </div>
//
//
//
//
//
//                     <button type="submit" className="btn btn-primary w-100" disabled={!validateForm()}>
//                         {submission.submission_id ? 'Update' : 'Add' }
//                     </button>
//
//
//                 </form>
//             </div>
//         </div>
//     )
// }
//
// export default AddOrUpdate;
