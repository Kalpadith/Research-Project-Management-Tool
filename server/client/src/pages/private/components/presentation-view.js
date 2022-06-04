


import * as React from "react";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";
import UpdatePresentation from "./update-presentation";



const AllPresentations = forwardRef((props, ref) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [presentations, setPresentations] = useState([]);
    const [presentation, setPresentation] = useState({});


    useImperativeHandle(ref, () => ({
        callpresentationList() {
            fetchData().then()
        }

    }));

    useEffect(() => {
        fetchData().then();
    }, []);


    async function fetchData() {
        const result = await axios.get('/presentation/');
        if (result.status === 200) {
            setPresentations(result.data);
        }
    }

    const deletepresentation = async (id) => {
        const result = await axios.delete(`/presentation/?id=${id}`);
        if (result.status === 200) {
            await fetchData();
        }
    };

    async function showModal(event, presentations) {
        event.preventDefault();
        setPresentation(presentations);
        handleShow();
    }

    async function hideModal() {
        handleClose();
        setPresentation({});
        fetchData().then();
        
    }

   
    return (
        <>
            <div className='mt-3'>
            {/* <div className="col-lg-3 mt-2 mb-2">
                             <input
                                 className="form-control"
                                 type="search"
                                 placeholder="search by user role"
                                 name="searchQuery"
                                 aria-label="Search"
                                onChange={this.handleSearchArea}>

                             </input>
                         </div> */}
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Student Group</th>
                            <th scope="col">Date</th>
                            <th scope="col">Results</th>
                            <th scope="col">Panel number</th>
                            <th scope="col">Feedback</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            presentations?.map(x => {
                                return (
                                     <tr key={x._id}>                                   
                                     <td>{x.studentGroup_number}</td>
                                     <td>{x.presentationDate}</td>
                                     <td>{x.results}</td>
                                     <td>{x.panel_no}</td>
                                     <td>{x.feedback}</td>
                                     
                                       {/* <th scope="col">#</th> */}
                                        <td>
                                            <button className="btn btn-warning" onClick={(e) => showModal(e, x)}>
                                                <i className="las la-edit" />
                                            </button>
                                            <button className="m-2 btn btn-danger" onClick={() => deletepresentation(x?._id)}>
                                                <i className="las la-trash" />
                                            </button>
                                            </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
 <div>
<Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Evaluate</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <UpdatePresentation presentation={presentation} hideModal={hideModal}/>
                </Modal.Body>
            </Modal>
</div> 
           
            
        </>
        
    )


});
export default AllPresentations;

