import * as React from "react";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {Button} from "@mui/material";
import Register from "./Register";

const Login = () => {
    // JUST FOR DEV SPREED
    const [email, setEmail] = useState("thusithanjana.t@sliit.lk");
    const [password, setPassword] = useState("D59878r6");

    const navigate = useNavigate()

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const result = await axios.post('/users/login', {
            email: email,
            password: password
        });
        if (result.status === 200) {

            // USE SWITCH CASE FOR OTHER ROLES

            sessionStorage.setItem('user', JSON.stringify(result.data));
            sessionStorage.setItem('email', email);
            if (result.data.user_role === 'admin'){
                sessionStorage.setItem('role', 'admin');
                navigate('/admin')
            }
            else if (result.data.user_role === 'supervisor'){
                sessionStorage.setItem('role', 'supervisor');
                navigate('/supervisor')
            }
            else if (result.data.user_role === 'Pannel_member'){
                sessionStorage.setItem('role', 'Pannel_member');
                navigate('/pannel-member')
            }
            else {
               
                sessionStorage.setItem('role', 'student');
                navigate('/student')
            }

        }

    }

    return (<div className="container d-flex justify-content-center align-items-center" style={{
            width: '450px', height: '100vh',
        }}>
            <div>
                <div className='h1'>Login</div>
                <form className='mt-3' onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input className="form-control" autoFocus
                               type="email"
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input className="form-control" type="password"
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <Button type="submit" className="btn btn-primary w-100"
                            disabled={!validateForm()}
                            variant="contained">
                        Submit
                    </Button>
                    <Button type="submit" className="btn btn-primary w-100" href="./reg">
                        Signup                 
                    </Button>

                </form>
            </div>
        </div>)
}

export default Login;
