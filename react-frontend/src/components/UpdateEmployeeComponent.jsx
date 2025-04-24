import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''
        };
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then((res) => {
            let employee = res.data;
            this.setState({
                firstName: employee.firstName,
                lastName: employee.lastName,
                emailId: employee.emailId
            });
        });
    }

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailId: this.state.emailId
        };
        EmployeeService.updateEmployee(employee, this.state.id).then(res => {
            this.props.history.push('/employees');
        });
    }

    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    }

    changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value });
    }

    changeEmailHandler = (event) => {
        this.setState({ emailId: event.target.value });
    }

    cancel() {
        this.props.history.push('/employees');
    }

    render() {
        const containerStyle = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: '#f0f4f8', // Light background color
            fontFamily: 'Segoe UI, sans-serif'
        };

        const cardStyle = {
            backgroundColor: '#ffffff',
            padding: '30px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            width: '100%',
            maxWidth: '500px'
        };

        const titleStyle = {
            textAlign: 'center',
            marginBottom: '20px',
            color: '#3b82f6' // Blue title
        };

        const labelStyle = {
            display: 'block',
            marginBottom: '6px',
            fontWeight: 'bold',
            color: '#374151'
        };

        const inputStyle = {
            width: '100%',
            padding: '10px',
            borderRadius: '8px',
            border: '1px solid #d1d5db',
            marginBottom: '15px',
            fontSize: '15px'
        };

        const buttonStyle = {
            padding: '10px 20px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '14px'
        };

        const saveButtonStyle = {
            ...buttonStyle,
            backgroundColor: '#3b82f6', // Blue save button
            color: '#ffffff'
        };

        const cancelButtonStyle = {
            ...buttonStyle,
            backgroundColor: '#ef4444', // Red cancel button
            color: '#ffffff',
            marginLeft: '10px'
        };

        return (
            <div style={containerStyle}>
                <div style={cardStyle}>
                    <h3 style={titleStyle}>Update Employee</h3>
                    <form>
                        <div>
                            <label style={labelStyle}>First Name:</label>
                            <input
                                placeholder="First Name"
                                name="firstName"
                                style={inputStyle}
                                value={this.state.firstName}
                                onChange={this.changeFirstNameHandler}
                            />
                        </div>
                        <div>
                            <label style={labelStyle}>Last Name:</label>
                            <input
                                placeholder="Last Name"
                                name="lastName"
                                style={inputStyle}
                                value={this.state.lastName}
                                onChange={this.changeLastNameHandler}
                            />
                        </div>
                        <div>
                            <label style={labelStyle}>Email Id:</label>
                            <input
                                placeholder="Email Address"
                                name="emailId"
                                style={inputStyle}
                                value={this.state.emailId}
                                onChange={this.changeEmailHandler}
                            />
                        </div>
                        <button style={saveButtonStyle} onClick={this.updateEmployee}>Save</button>
                        <button style={cancelButtonStyle} onClick={this.cancel.bind(this)}>Cancel</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default UpdateEmployeeComponent;
