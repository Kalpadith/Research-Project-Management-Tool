import * as React from "react";
import ViewSubmission from "./ViewSubmission";
// import AddOrUpdate from "./AddOrUpdate";
import {useRef, useState} from "react";
import {Button, Modal} from "react-bootstrap";

export const Submissions = () => {

    const childRef = useRef();

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
        childRef.current?.callSubmissionsList();
    };

    const handleShow = () => setShow(true);

    return (
        <>
            <div>
                {/*<div className="text-end">*/}
                {/*    <Button variant="primary" onClick={handleShow}>*/}

                {/*        <i className="las la-plus-circle"/> Add Evaluation*/}
                {/*    </Button>*/}
                {/*</div>*/}
                <ViewSubmission ref={childRef}/>
            </div>

            {/*<Modal show={show} onHide={handleClose}>*/}
            {/*    <Modal.Header closeButton>*/}
            {/*        <Modal.Title>Add Evaluation</Modal.Title>*/}
            {/*    </Modal.Header>*/}
            {/*    <Modal.Body>*/}
            {/*        <AddOrUpdate hideModel={handleClose}/>*/}
            {/*    </Modal.Body>*/}
            {/*</Modal>*/}
        </>

    );
};
