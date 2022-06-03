import * as React from "react";
import {useEffect, useState} from "react";
import UserPersonalDetails from "../../components/user-personal-details";
import UserGroup from "../../components/user-group";
import axios from "axios";


const Student = () =>{



    const [group, setGroup] = useState({});

    useEffect(() => {
        const currentUser = JSON.parse(sessionStorage.getItem("user"));
        axios.get('/groups/user?id=' + currentUser._id)
            .then(res => {
                setGroup(res.data[0]);
            })
            .catch(err => {
                console.log(err);
            });
    }, [])



    return (<> 
    
    <h1>Student</h1>
    <UserPersonalDetails/>

    <div>

    <UserGroup group={group}/>
    </div>
    </>)
}

export default Student;