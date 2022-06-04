import * as React from "react";
import {useEffect, useState} from "react";
import axios from "axios";

const Register = ({users}) => {

    if(!users)
    users = {};
    const [user_id, setuser_id] = useState("");
    const [user_Fname, setuser_Fname] = useState("");
    const [user_Lname, setuser_Lname] = useState("");
    const [user_designation, setuser_designation] = useState("");
    const [user_role, setuser_role] = useState("");
    const [user_phone, setuser_phone] = useState("");
    const [user_email, setuser_email] = useState("");
    const [user_password, setuser_password] = useState("");
    const [student_id, setstudent_id] = useState("");
    

    useEffect(() => {

        if(users._id) {
            setuser_id(users.user_id);
            setuser_Fname(users.user_Fname);
            setuser_Lname(users.user_Lname);
            setuser_designation(users.user_designation);
            setuser_role(users.user_role);
            setuser_phone(users.user_phone);
            setuser_email(users.user_email);
            setuser_password(users.user_password);
            setstudent_id(users.student_id);
            
            validateForm();
        }

    }, []);

    function validateForm() {
        if(users.user_id)
            return true;
        return user_Fname.length > 0 && user_Lname.length > 0 && user_designation.length > 0 && user_phone.length > 0 && user_role.length > 0  && user_email.length > 0  && user_password.length > 0 && student_id.length >0;
    }

    async function handleSubmit(event) {
        event.preventDefault();

        // if(users.user_id) {
        //     await axios.patch(`/users/update?id=${users?._id}`, {
        //         user_Fname: user_Fname,
        //         user_Lname: user_Lname,
        //         user_designation: user_designation,
        //         user_role: user_role,
        //         user_phone: user_phone,
        //         user_email: user_email,
        //         user_password: user_password,
        //         student_id: student_id
        //     });
        //     hideModel({});
        // } else {
            await axios.post(`/users/add`, {
                user_Fname: user_Fname,
                user_Lname: user_Lname,
                user_designation: user_designation,
                user_role: user_role,
                user_phone: user_phone,
                user_email: user_email,
                user_password: user_password,
                student_id: student_id
            });
            // hideModel();
        }
    


    return (
        <div className="container">
            <div>
                <form className='mt-3' onSubmit={handleSubmit}>
                <div className="mb-3">
                        <label className="form-label">User Id</label>
                        <input className="form-control"
                               type="text"
                               disabled={!!users.user_id}
                               value={user_id}
                               onChange={(e) => setuser_id(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">First Name</label>
                        <input className="form-control"
                               type="text"
                               value={user_Fname}
                               onChange={(e) => setuser_Fname(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Last Name</label>
                        <input className="form-control" type="text"
                               value={user_Lname}
                               onChange={(e) => setuser_Lname(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Designation</label>
                        <input className="form-control" type="text"
                               value={user_designation}
                               onChange={(e) => setuser_designation(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Role</label>
                        <input className="form-control" type="text"
                               value={user_role}
                               onChange={(e) => setuser_role(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Phone no</label>
                        <input className="form-control" type="Number"
                               value={user_phone}
                               onChange={(e) => setuser_phone(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input className="form-control" type="text"
                               value={user_email}
                               onChange={(e) => setuser_email(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input className="form-control" type="text"
                               value={user_password}
                               onChange={(e) => setuser_password(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Student ID</label>
                        <input className="form-control" type="text"
                               value={student_id}
                               placeholder= {"only for students"}
                               onChange={(e) => setstudent_id(e.target.value)}/>
                    </div>

                    <button type="submit" className="btn btn-primary w-100" disabled={!validateForm()} href="*">
                        {/* {users.user_id ? 'Update' : 'Add' } */}
                        Register
                    </button>


                </form>
            </div>
        </div>
    )
}

export default Register;
