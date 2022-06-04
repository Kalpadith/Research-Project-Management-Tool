// import * as React from "react";
// import {useState} from "react";
// import axios from "axios";
// //import {Link, useNavigate} from 'react-router-dom';
//
//
// const Supervisor = () => {
//
//
//     const [user_id, setuser_id] = useState("");
//     const [user_Fname, setuser_Fname] = useState("");
//     const [user_Lname, setuser_Lname] = useState("");
//     const [user_designation, setuser_designation] = useState("");
//     const [user_role, setuser_role] = useState("");
//     const [user_phone, setuser_phone] = useState("");
//     const [user_email, setuser_email] = useState("");
//     const [user_password, setuser_password] = useState("");
//     const [student_id, setstudent_id] = useState("");
//     const [student_grpid, setstudent_grpid] = useState("");
//     const [assigned_group, setassigned_group] = useState("");
//
//
//     const navigate = useNavigate()
//
//     function validateForm() {
//         return user_email.length > 0 && user_password.length > 0;
//     }
//
//     async function handleSubmit(event) {
//         event.preventDefault();
//         const result = await axios.post('/profile/register', {
//             user_id: user_id,
//             user_Fname: user_Fname,
//             user_Lname: user_Lname,
//             user_designation: user_designation,
//             user_role: user_role,
//             user_phone: user_phone,
//             user_email: user_email,
//             user_password: user_password,
//             student_id: student_id,
//             student_grpid: student_grpid,
//             assigned_group: assigned_group
//
//         });
//
//         if (result.status === 200 && result.data.success) {
//             // localStorage.setItem('user', JSON.stringify(result.data.user));
//             // localStorage.setItem('email', email);
//
//             message: "success"
//         }
//             // if (result.data.user.type === 'customer')
//         //     navigate('/customer')
//         else {
//             /// navigate('/trader')
//             message: "error"
//         }
//
//     }
//
//
//     return (
//         <div className="container d-flex justify-content-center align-items-center" style={{
//             width: '450px',
//             height: '100vh',
//         }}>
//             <div>
//                 <div className='h1'>Supervisor Profile</div>
//                 <form className='mt-3' onSubmit={handleSubmit}>
//                     <div className="mb-3">
//                         <div className="mb-3">
//
//
//                             <label className="form-label">user_id</label>
//                             <input className="form-control" autoFocus
//                                    type="user_id"
//                                    value={user_id}
//                                    onChange={(e) => setuser_id(e.target.value)}/>
//
//                             <label className="form-label">user_Fname</label>
//                             <input className="form-control" autoFocus
//                                    type="user_Fname"
//                                    value={user_Fname}
//                                    onChange={(e) => setuser_Fname(e.target.value)}/>
//
//                             <label className="form-label">user_Lname</label>
//                             <input className="form-control" autoFocus
//                                    type="user_Lname"
//                                    value={user_Lname}
//                                    onChange={(e) => setuser_Lname(e.target.value)}/>
//                             <div id="emailHelp" className="form-text">We'll never share your email with anyone else.
//                             </div>
//
//                             <label className="form-label">user_designation</label>
//                             <input className="form-control" type="user_designation"
//                                    value={user_designation}
//                                    onChange={(e) => setuser_designation(e.target.value)}/>
//
//
//                             <label className="form-label">user_role</label>
//                             <input className="form-control" autoFocus
//                                    type="user_role"
//                                    value={user_role}
//                                    onChange={(e) => setuser_role(e.target.value)}/>
//                             </div>
//
//                             <label className="form-label">user_phone</label>
//                             <input className="form-control" autoFocus
//                                type="user_phone"
//                                value={user_phone}
//                                onChange={(e) => setuser_phone(e.target.value)}/></div>
//                            <label className="form-label">user_email</label>
//                            <input className="form-control" autoFocus
//                                   type="user_email"
//                                   value={user_email}
//                                   onChange={(e) => setuser_email(e.target.value)}/>
//
//                            <label className="form-label">user_password</label>
//                            <input className="form-control" autoFocus
//                                  type="user_password"
//                                   value={user_password}
//                                   onChange={(e) => setuser_password(e.target.value)}/>
//
//                            <label className="form-label">student_id</label>
//                            <input className="form-control" autoFocus
//                                   type="student_id"
//                                   value={student_id}
//                                   onChange={(e) => setstudent_id(e.target.value)}/>
//
//
//                             <label className="form-label">student_grpid</label>
//                             <input className="form-control" autoFocus
//                                      type="student_grpid"
//                                      value={student_grpid}
//                                       onChange={(e) => setstudent_grpid(e.target.value)}/>
//
//                           <label className="form-label">assigned_group</label>
//                           <input className="form-control" autoFocus
//                               type="assigned_group"
//                                value={assigned_group}
//                                 onChange={(e) => setassigned_group(e.target.value)}/>
//
//
//
//
//     <button type="submit" className="btn btn-primary w-100" disabled={!validateForm()}>Submit
//                     </button>
//
//
//                     <Link className="nav-link mr-2" to='/'>Back to Login</Link>
//                 </form>
//             </div>
//         </div>
//     )
// }
//
// export default Supervisor;
