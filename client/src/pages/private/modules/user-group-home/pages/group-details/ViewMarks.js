import * as React from "react";
import {forwardRef, useEffect, useImperativeHandle, useState} from "react";
import axios from "axios";


const ViewMarks = forwardRef((props, ref) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [evaluations, setEvaluations] = useState([]);
    const [evaluation, setEvaluation] = useState({});


    useImperativeHandle(ref, () => ({
        callEvaluationList() {
            fetchData().then()
        }

    }));

    useEffect(() => {
        fetchData().then();
    }, []);


    async function fetchData() {
        const result = await axios.get('/evaluations');
        if (result.status === 200) {
            setEvaluations(result.data);
        }
    }

    const deleteEvaluation= async (id) => {
        const result = await axios.delete(`/evaluations?id=${id}`);
        if (result.status === 200) {
            await fetchData();
        }
    };

    async function showModal(event, evaluations) {
        event.preventDefault();
        setEvaluations(evaluations);
        handleShow();
    }

    async function hideModel() {
        handleClose();
        setEvaluations({});
        fetchData().then();
    }

    return (
        <>
            <div className='mt-3'>
                <table className="table">
                    <thead>
                    <tr>

                        <th scope="col">marks</th>

                        <th scope="col">comment</th>

                    </tr>
                    </thead>
                    <tbody>
                    {
                        evaluations?.map(x => {
                            return (
                                <tr key={x._id}>

                                    <td>{x.marks}</td>
                                    <td>{x.comment}</td>

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
export default ViewMarks;

