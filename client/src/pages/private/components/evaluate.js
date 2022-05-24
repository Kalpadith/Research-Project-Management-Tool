import React, { Component } from 'react'
import axios from 'axios';
//import {BrowserRouter} from 'react-router-dom';
//import NavBar from './NavBar';


//import { useState, useEffect } from 'react';




export default class addEvaluation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            studentGroupId: "",
            submissionId: "",
            marks	: ""

        }
    }


    validate = () => {

        let studentGroupIdError = "";
        let submissionIdError= "";
        let marksError = "";

        if (!this.state.studentGroupId) {
            studentGroupIdError = "Student Group_number cannot be blank"
        }
        if (!this.state.submissionId) {
            submissionIdError = "submissionIdError type cannot be blank"
        }
        if (!this.state.marks) {
            marksError = "marks cannot be blank"
        }


        if (studentGroupIdError || submissionIdError || marksError ) {
            this.setState({ studentGroupIdError, submissionIdError, marksError });
            return false;
        }

        return true;
    };


    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            [name]: value
        })
    }

    onSubmit = (e) => {

        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {

            const { studentGroupId, submissionId, marks	 } = this.state;

            const data = {
                studentGroupId: studentGroupId,
                submissionId: submissionId,
                marks: marks

            }

            console.log(data)


            axios.post("http://localhost:5000/evaluations", data).then((res) => {
                if (res.data.success) {
                    this.setState({
                        studentGroupId: "",
                        submissionId: "",
                        marks	: ""

                    })
                }
            })
        }
    }

    render() {
        return (


            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Evaluation</h1>
                <form className="needs-validation" validate>
                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '5px' }}>studentGroupId</label>
                        <input type="text"
                               className="form-control"
                               name="studentGroupId"
                               placeholder="studentGroupId"
                               value={this.state.studentGroupId}
                               onChange={this.handleInputChange} />
                        <div style={{ color: "red" }}>
                            {this.state.studentGroupIdError}
                        </div>

                    </div>



                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '5px' }}>submissionId	</label>
                        <input type="text"
                               className="form-control"
                               name="submissionId"
                               placeholder="submissionId"
                               value={this.state.submissionId}
                               onChange={this.handleInputChange} />
                        <div style={{ color: "red" }}>
                            {this.state.submissionIdError}
                        </div>
                    </div>


                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '5px' }}>marks	</label>
                        <input type="text"
                               className="form-control"
                               name="marks"
                               placeholder="marks"
                               value={this.state.marks}
                               onChange={this.handleInputChange} />
                        <div style={{ color: "red" }}>
                            {this.state.marksError}
                        </div>
                    </div>







                    <button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; save
                    </button>
                    <br></br>


                </form>

            </div>
        )
    }
}


