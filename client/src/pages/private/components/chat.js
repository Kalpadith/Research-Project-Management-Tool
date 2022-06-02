import React, { Component } from 'react'
import axios from 'axios';




export default class addEvaluation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            studentGroupId: "",
            userId: "",
            message	: ""

        }
    }


    validate = () => {

        let studentGroupIdError = "";
        let userIdError= "";
        let messageError = "";

        if (!this.state.studentGroupId) {
            studentGroupIdError = "Student Group_number cannot be blank"
        }
        if (!this.state.userId) {
            userIdError = "userIdError type cannot be blank"
        }
        if (!this.state.message) {
            messageError = "marks cannot be blank"
        }


        if (studentGroupIdError || userIdError || messageError ) {
            this.setState({ studentGroupIdError, userIdError, messageError });
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

            const { studentGroupId, userId, message	 } = this.state;

            const data = {
                studentGroupId: studentGroupId,
                userId: userId,
                message: message

            }

            console.log(data)


            axios.post("http://localhost:5000/chat", data).then((res) => {
                if (res.data.success) {
                    this.setState({
                        studentGroupId: "",
                        userId: "",
                        message	: ""

                    })
                }
            })
        }
    }

    render() {
        return (


            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Chat</h1>
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
                        <label style={{ marginBottom: '5px' }}>userId	</label>
                        <input type="text"
                               className="form-control"
                               name="userId"
                               placeholder="userId"
                               value={this.state.userId}
                               onChange={this.handleInputChange} />
                        <div style={{ color: "red" }}>
                            {this.state.userIdError}
                        </div>
                    </div>


                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '5px' }}>message	</label>
                        <input type="text"
                               className="form-control"
                               name="message"
                               placeholder="message"
                               value={this.state.message}
                               onChange={this.handleInputChange} />
                        <div style={{ color: "red" }}>
                            {this.state.messageError}
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


