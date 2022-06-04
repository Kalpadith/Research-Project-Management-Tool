import * as React from "react";
import { useEffect, useState } from "react";
import UserPersonalDetails from "../../components/user-personal-details";
import UserGroup from "../../components/user-group";
import axios from "axios";


const Student = () => {



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

        <center>
            <br /><br />
            <h1>Hello Student</h1>
            <h3>Welcome to Research Management Tool</h3>
            <br /><br />
            <UserPersonalDetails />
            <div>
                <UserGroup group={group} />
            </div>
        </center>
    </>)
}

export default Student;