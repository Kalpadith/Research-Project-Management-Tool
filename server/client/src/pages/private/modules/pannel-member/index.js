import * as React from "react";
import {useEffect, useState} from "react";
import UserPersonalDetails from "../../components/user-personal-details";
import MemberGroup from "../../components/member-group";
import axios from "axios";


const PannelMember = () =>{



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
    
    <h1>Pannel Member</h1>
    <UserPersonalDetails/>

    <div>

    <MemberGroup group={group}/>
    </div>
    </>)
}

export default PannelMember;