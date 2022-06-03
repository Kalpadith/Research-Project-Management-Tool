import * as React from "react";
import {useEffect, useState} from "react";
import axios from "axios";
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {Link, useNavigate} from 'react-router-dom';

const User = ({user}) => {

    const navigate = useNavigate()

    function onNavigate() {
        navigate('/user-list')
    }
    function onNavigate1() {
        navigate('/user-list')
    }

    return (
        <><Card sx={{ minWidth: 275 }}>
            <CardContent>

                <Typography variant="h5" component="div">
                    User Management
                </Typography>

            </CardContent>
            <CardActions>
                <Button size="small" onClick={onNavigate}>More Actions</Button>
            </CardActions>
        </Card>
        <Card sx={{ minWidth: 275 }}>
                <CardContent>

                    <Typography variant="h5" component="div">
                        Submissions, marking schemes and doc management
                    </Typography>

                </CardContent>
                <CardActions>
                    <Button size="small" onClick={onNavigate1}>More Actions</Button>
                </CardActions>
            </Card></>
        

    );
};


export default User;
