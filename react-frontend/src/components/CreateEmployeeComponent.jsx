import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    componentDidMount() {
        if (this.state.id === '_add') return;

        EmployeeService.getEmployeeById(this.state.id).then((res) => {
            let employee = res.data;
            this.setState({
                firstName: employee.firstName,
                lastName: employee.lastName,
                emailId: employee.emailId
            });
        });
    }

    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailId: this.state.emailId
        };

        if (this.state.id === '_add') {
            EmployeeService.createEmployee(employee).then(res => {
                this.props.history.push('/employees');
            });
        } else {
            EmployeeService.updateEmployee(employee, this.state.id).then(res => {
                this.props.history.push('/employees');
            });
        }
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

    getTitle() {
        return (
            <h3 style={{ textAlign: 'center', color: '#3b82f6', marginBottom: '20px' }}>
                {this.state.id === '_add' ? 'Add Employee' : 'Update Employee'}
            </h3>
        );
    }

    render() {
        const containerStyle = {
            padding: '40px 20px',
            backgroundColor: '#f9fafb',
            minHeight: '100vh',
            fontFamily: 'Segoe UI, sans-serif'
        };

        const cardStyle = {
            backgroundColor: '#ffffff',
            maxWidth: '500px',
            margin: '0 auto',
            borderRadius: '10px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            padding: '30px'
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
            borderRadius: '6px',
            border: '1px solid #d1d5db',
            marginBottom: '16px',
            fontSize: '14px'
        };

        const buttonStyle = {
            padding: '10px 20px',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',
            cursor: 'pointer'
        };

        const saveButton = {
            ...buttonStyle,
            backgroundColor: '#3b82f6', // Blue for the save button
            color: 'white',
            marginRight: '10px'
        };

        const cancelButton = {
            ...buttonStyle,
            backgroundColor: '#ef4444', // Red for the cancel button
            color: 'white'
        };

        return (
            <div style={containerStyle}>
                <div style={cardStyle}>
                    {this.getTitle()}
                    <form>
                        <div>
                            <label style={labelStyle}>First Name:</label>
                            <input
                                style={inputStyle}
                                placeholder="First Name"
                                name="firstName"
                                value={this.state.firstName}
                                onChange={this.changeFirstNameHandler}
                            />
                        </div>
                        <div>
                            <label style={labelStyle}>Last Name:</label>
                            <input
                                style={inputStyle}
                                placeholder="Last Name"
                                name="lastName"
                                value={this.state.lastName}
                                onChange={this.changeLastNameHandler}
                            />
                        </div>
                        <div>
                            <label style={labelStyle}>Email Id:</label>
                            <input
                                style={inputStyle}
                                placeholder="Email Address"
                                name="emailId"
                                value={this.state.emailId}
                                onChange={this.changeEmailHandler}
                            />
                        </div>

                        <button style={saveButton} onClick={this.saveOrUpdateEmployee}>Save</button>
                        <button style={cancelButton} onClick={this.cancel.bind(this)}>Cancel</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default CreateEmployeeComponent;
