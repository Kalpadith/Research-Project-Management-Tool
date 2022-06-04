import * as React from "react";
import {forwardRef, useEffect, useImperativeHandle, useState} from "react";
import axios from "axios";


const ViewGroups = forwardRef((props, ref) => {

    // const [show, setShow] = useState(false);
    //
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);



    const [open, setOpen] = React.useState(false);
    // const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    const [researchprojects, setResearchprojects] = useState([]);
    const [groups, setGroup] = useState({});


    useImperativeHandle(ref, () => ({
        callGroupList() {
            fetchData().then()
        }

    }));

    useEffect(() => {
        fetchData().then();
    }, []);


    async function fetchData() {
        const result = await axios.get('/researchprojects');
        if (result.status === 200) {
            setResearchprojects(result.data);
        }
    }

    const deleteResearchproject= async (id) => {
        const result = await axios.delete(`/researchprojects?id=${id}`);
        if (result.status === 200) {
            await fetchData();
        }
    };

    async function showModal(event, groups) {
        event.preventDefault();
        setGroup(groups);
        handleShow();
    }

    async function hideModel() {
        handleClose();
        setResearchprojects({});
        fetchData().then();
    }

    return (
        <>
            <div className='mt-3'>
                <table className="table">
                    <thead>
                    <tr>

                        <th scope="col">Research Group ID</th>
                        <th scope="col">Research Name</th>
                        <th scope="col">Reqested Supervisor</th>
                        <th scope="col">Topic Approval</th>
                        <th scope="col">Supervisor Approval</th>


                    </tr>
                    </thead>
                    <tbody>
                    {
                        researchprojects?.map(x => {
                            return (
                                <tr key={x._id}>

                                    <td>{x.researchgrp_id}</td>
                                    <td>{x.research_name}</td>
                                    <td>{x.requested_supervisor}</td>
                                    <td>{x.topic_approval}</td>
                                    <td>{x.supervisor_approval}</td>

                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>

            {/*<Modal show={show} onHide={handleClose}>*/}
            {/*    <Modal.Header closeButton>*/}
            {/*        <Modal.Title>Update Evaluation</Modal.Title>*/}
            {/*    </Modal.Header>*/}
            {/*    <Modal.Body>*/}
            {/*        <AddOrUpdate submissions={submission} hideModel={hideModel}/>*/}
            {/*    </Modal.Body>*/}
            {/*</Modal>*/}
        </>

    )


});
export default ViewGroups;

