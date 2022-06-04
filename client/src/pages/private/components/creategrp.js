import * as React from "react";
import {useState} from "react";
import axios from "axios";
import {Link, useNavigate} from 'react-router-dom';


const Create_grp = () => {


    const [id1, setId1] = useState("");
    const [id2, setId2] = useState("");
    const [id3, setId3] = useState("");
    const [id4, setId4] = useState("");
    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");
    const [name3, setName3] = useState("");
    const [name4, setName4] = useState("");
    ;


    const navigate = useNavigate()


    async function handleSubmit(event) {
        event.preventDefault();
        const result = await axios.post('/user/', {
            id1: id1,
            id2: id2,
            id3: id3,
            id4: id4,
            name1: name1,
            name2: name2,
            name3: name3,
            name4: name4
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
                <br/><br/><br/><br/><br/><br/><br/><br/>
                <div className='h2'>Register Group Members</div>
                <form className='mt-3' onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <div className="mb-3">


                            <label className="form-label">Student ID(Member 01)</label>
                            <input className="form-control" autoFocus
                                   type="id1"
                                   value={id1}
                                   onChange={(e) => setId1(e.target.value)}/>

                            <label className="form-label">Student Name(Member 01)</label>
                            <input className="form-control" autoFocus
                                   type="name1"
                                   value={name1}
                                   onChange={(e) => setName1(e.target.value)}/>

                            <label className="form-label">Student ID(Member 02)</label>
                            <input className="form-control" autoFocus
                                   type="id2"
                                   value={id2}
                                   onChange={(e) => setId2(e.target.value)}/>

                            <label className="form-label">Student Name(Member 02)</label>
                            <input className="form-control" autoFocus
                                   type="name2"
                                   value={name2}
                                   onChange={(e) => setName2(e.target.value)}/>

                            <label className="form-label">Student ID(Member 03)</label>
                            <input className="form-control" autoFocus
                                   type="id3"
                                   value={id3}
                                   onChange={(e) => setId3(e.target.value)}/>

                            <label className="form-label">Student Name(Member 03)</label>
                            <input className="form-control" autoFocus
                                   type="name3"
                                   value={name3}
                                   onChange={(e) => setName3(e.target.value)}/>

                            <label className="form-label">Student ID(Member 04)</label>
                            <input className="form-control" autoFocus
                                   type="id4"
                                   value={id4}
                                   onChange={(e) => setId4(e.target.value)}/>

                            <label className="form-label">Student Name(Member 04)</label>
                            <input className="form-control" autoFocus
                                   type="name4"
                                   value={name4}
                                   onChange={(e) => setName4(e.target.value)}/>



                        </div>

                    </div>



                    <button type="submit" className="btn btn-primary w-100" >Submit
                    </button>
                    <br/><br/><br/><br/><br/><br/><br/><br/>


                </form>
            </div>
        </div>
    )
}

export default Create_grp;
