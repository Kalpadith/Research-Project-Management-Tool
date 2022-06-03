import * as React from "react";
import {useEffect, useState} from "react";
import axios from "axios";
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {Link, useNavigate} from 'react-router-dom';

const MemberGroup = ({group}) => {

    const navigate = useNavigate()

    function onNavigate() {
        navigate('/PanelNav')
    }
    function onNavigate1() {
        navigate('/MemberV')
    }

    return (
        <div>
        <Card sx={{minWidth: 275}}>
            <CardContent>
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    {group._id}
                </Typography>
                <Typography variant="h5" component="div">
                    {group.research_name}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                    Presentation Evaluate : <span className={group.supervisor_approval === 'Pending'? 'text-warning':'text-success' }>{group.supervisor_approval}</span>
                </Typography>
                <br/>
                
            </CardContent>
            <CardActions>
                <Button size="small" onClick={onNavigate}>View More</Button>
            </CardActions>
        </Card>
        <br/>
        <Button size="small" onClick={onNavigate1}>View Evaluate presentations</Button>
        </div>
       
        
        
            
        
            
       
    

    );
};


export default MemberGroup;
