import * as React from "react";
import {useEffect, useState} from "react";
import axios from "axios";
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {Link, useNavigate} from 'react-router-dom';

const UserGroup = ({group}) => {

    const navigate = useNavigate()

    function onNavigate() {
        navigate('/user-group/' + group._id)
    }

    return (
        <Card sx={{minWidth: 275}}>
            <CardContent>
                <Typography sx={{fontSize: 14}} color="#800000" gutterBottom>
                    {group._id}
                </Typography>
                <Typography variant="h5" component="div">
                    {group.research_name}
                </Typography>
                <Typography variant="caption" color="#800000">
                    Supervisor Approval : <span className={group.supervisor_approval === 'Pending'? 'text-warning':'text-success' }>{group.supervisor_approval}</span>
                </Typography>
                <br/>
                <Typography variant="caption" color="#800000">
                    Topic Approval : <span className={group.topic_approval === 'Pending' ? 'text-warning':'text-success' }>{group.topic_approval}</span>
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={onNavigate}>View More</Button>
            </CardActions>
        </Card>

    );
};


export default UserGroup;
