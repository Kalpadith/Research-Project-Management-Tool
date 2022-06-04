import * as React from "react";
import {Avatar, Box, Card, CardContent, CardMedia, IconButton, Typography} from "@mui/material";
import {useEffect, useState} from "react";


const MemberDetails = () => {

    const [user, setUser] = useState({});
    useEffect(() => {
        setUser(JSON.parse(sessionStorage.getItem("user")));
    }, []);


    return (
        <Card className="p-3">
            <div className='d-flex justify-content-center'>
                <Avatar
                    alt={user.user_Fname}
                    src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                    sx={{width: 56, height: 56}}
                />
            </div>
            <div className="d-flex justify-content-center mt-2">
                <div>
                    <Typography variant="h6">
                        {user.user_Fname} {user.user_Lname}
                    </Typography>
                    <Typography variant="body2">
                        {user.user_email} - <span> <b> {user.user_designation} </b> </span>
                    </Typography>
                </div>
            </div>
        </Card>
    );
}


export default MemberDetails;
