import * as React from 'react';
import {styled, useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ChatIcon from '@mui/icons-material/Chat';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import SummarizeIcon from '@mui/icons-material/Summarize';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';

import {Link, Outlet, useParams} from 'react-router-dom';
import {
    Avatar,
    AvatarGroup,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from "@mui/material";
import {useEffect} from "react";
import axios from "axios";
import store from '@core/store';
import {add} from "../group-user-home.reducer";

import CurrentUserDetails from '../../../components/current-user-details';

const drawerWidth = 260;

const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));


export default function Layout() {

    const {id} = useParams();

    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [users, setUsers] = React.useState([]);
    const [project, setProject] = React.useState({});

    const userRole = sessionStorage.getItem('role');


    useEffect(() => {

        axios.get('/users/group/' + id)
            .then(res => {
                if (res.status === 200) {
                    store.dispatch(add(res.data));
                }
            })
            .catch(err => {
                console.log(err);
            });

        store.subscribe(() => {
            setUsers(store.getState().groupUserHome.users);
        })

        axios.get('/research/' + id)
            .then(res => {
                if (res.status === 200) {
                    setProject(res.data)
                }
            })
            .catch(err => {
                console.log(err);
            });

        store.subscribe(() => {
            setUsers(store.getState().groupUserHome.users);
        })


    }, []);


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    const [supervisorApprovalOpen, setSupervisorApprovalOpen] = React.useState(false);

    const supervisorApprovalOpenOpen = () => {
        setSupervisorApprovalOpen(true);
    };

    const supervisorApprovalOpenClose = () => {
        setSupervisorApprovalOpen(false);
    };


    function onTopicSubmit() {
        axios.post('/groups/acceptTopic', {
            id: id,
        }).then(res => {
            if (res.status === 200 && res.data != null) {
                setProject(res.data);
                supervisorApprovalOpenClose();
            }
        });


    }


    const studentNav = () => {
        return (
            <>
                <List>

                    <Link to='./Request_Supervisor' className='text-link'>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ScheduleSendIcon/>
                                </ListItemIcon>
                                <ListItemText primary={'Request Supervisor / Co-Supervisor'}/>
                            </ListItemButton>
                        </ListItem>
                    </Link>

                    <Link to='./Reg_Research_Topic' className='text-link'>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ScheduleSendIcon/>
                                </ListItemIcon>
                                <ListItemText primary={'Register Research Topic '}/>
                            </ListItemButton>
                        </ListItem>
                    </Link>

                    <Link to='./Submit' className='text-link'>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <AutoAwesomeMotionIcon/>
                                </ListItemIcon>
                                <ListItemText primary={'Submission'}/>
                            </ListItemButton>
                        </ListItem>
                    </Link>

                </List>
            </>
        )
    }

    const supervisorNav = () => {
        return (
            <>
                <List>
                    <Link to='./submission-list' className='text-link'>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <AutoAwesomeMotionIcon/>
                                </ListItemIcon>
                                <ListItemText primary={'Submission List'}/>
                            </ListItemButton>
                        </ListItem>
                    </Link>

                    <ListItem disablePadding>
                        <ListItemButton onClick={supervisorApprovalOpenOpen}>
                            <ListItemIcon>
                                <BookmarkAddedIcon/>
                            </ListItemIcon>
                            <ListItemText primary={'Accept Topic'}/>
                        </ListItemButton>
                    </ListItem>

                </List>
            </>
        )
    }


    return (
        <>
            <Box sx={{display: 'flex'}}>
                <CssBaseline/>

                <AppBar style={{backgroundColor: '#fff', color: '#000'}} position="fixed" open={open}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{mr: 2, ...(open && {display: 'none'})}}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="caption" noWrap component="div">
                            Supervisor Approval : <span
                            className={project.supervisor_approval === 'Approved' ? 'text-success' : 'text-warning'}>{project.supervisor_approval}</span>
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <DrawerHeader>
                        <div className='d-flex justify-content-between'>
                            <div>
                                <Typography variant="caption" noWrap component="div" className='mt-2'>
                                    <b>Members</b>
                                </Typography>
                                <AvatarGroup max={4}>
                                    {users.map(user => (
                                        <Avatar key={user._id} alt={user.user_Fname} src={user.user_avatar}/>
                                    ))}
                                </AvatarGroup>
                            </div>
                            <IconButton
                                style={{backgroundColor: 'transparent'}} onClick={handleDrawerClose}>
                                {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                            </IconButton>
                        </div>


                    </DrawerHeader>
                    <Divider/>
                    <List>
                        <Link to={'/user-group/' + id} className='text-link'>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <SummarizeIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary={'Details'}/>
                                </ListItemButton>
                            </ListItem>
                        </Link>

                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <SettingsApplicationsIcon/>
                                </ListItemIcon>
                                <ListItemText primary={'Settings'}/>
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <Divider/>

                    {userRole === 'supervisor' ? supervisorNav() : studentNav()}

                    <Divider/>

                    <List>
                        <Link to='./chat' className='text-link'>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <ChatIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary={'Chat'}/>
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    </List>


                </Drawer>


                <Main open={open}>
                    <DrawerHeader/>
                    <Outlet/>
                </Main>
            </Box>

            {/*Dialog Box*/}

            <Dialog
                open={supervisorApprovalOpen}
                keepMounted
                onClose={supervisorApprovalOpenClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Do you really want to approve this topic?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Ones you accept, supervisor accept status will be set as Approved
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={supervisorApprovalOpenClose}>Disagree</Button>
                    <Button onClick={onTopicSubmit}>Agree</Button>
                </DialogActions>
            </Dialog>

        </>
    );
}
