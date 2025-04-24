import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employees: []
        };
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(id) {
        EmployeeService.deleteEmployee(id).then(res => {
            this.setState({ employees: this.state.employees.filter(employee => employee.id !== id) });
        });
    }

    viewEmployee(id) {
        this.props.history.push(`/view-employee/${id}`);
    }

    editEmployee(id) {
        this.props.history.push(`/add-employee/${id}`);
    }

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data });
        });
    }

    addEmployee() {
        this.props.history.push('/add-employee/_add');
    }

    render() {
        const containerStyle = {
            padding: '20px',
            backgroundColor: '#f0f4f8',
            minHeight: '100vh',
            fontFamily: 'Segoe UI, sans-serif'
        };

        const titleStyle = {
            textAlign: 'center',
            color: '#000e4a', // Blue title
            fontSize: '28px',
            marginBottom: '20px'
        };

        const buttonStyle = {
            backgroundColor: '#000e4a', // Blue button
            color: 'white',
            padding: '10px 16px',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            transition: 'background-color 0.3s'
        };

        const tableContainer = {
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            overflowX: 'auto'
        };

        const tableStyle = {
            width: '100%',
            borderCollapse: 'collapse'
        };

        const thStyle = {
            backgroundColor: '#e0f7ff', // Light blue
            color: '#000e4a', // Dark green text
            padding: '12px',
            textAlign: 'left',
            fontWeight: 'bold'
        };

        const tdStyle = {
            padding: '12px',
            borderBottom: '1px solid #e5e7eb'
        };

        const actionBtn = {
            padding: '6px 12px',
            marginRight: '10px',
            borderRadius: '5px',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            fontWeight: '500'
        };

        const updateBtn = { ...actionBtn, backgroundColor: '#000e4a' }; // Update button color
        const deleteBtn = { ...actionBtn, backgroundColor: '#ef4444' };
        const viewBtn = { ...actionBtn, backgroundColor: '#8b5cf6' };

        return (
            <div style={containerStyle}>
                <h2 style={titleStyle}>Employee List</h2>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
                    <button
                        style={buttonStyle}
                        onClick={this.addEmployee}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#2563eb'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#000e4a'}
                    >
                        + Add Employee
                    </button>
                </div>
                <div style={tableContainer}>
                    <table style={tableStyle}>
                        <thead>
                            <tr>
                                <th style={thStyle}>First Name</th>
                                <th style={thStyle}>Last Name</th>
                                <th style={thStyle}>Email</th>
                                <th style={thStyle}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(employee => (
                                    <tr key={employee.id} style={{ backgroundColor: '#fff' }}>
                                        <td style={tdStyle}>{employee.firstName}</td>
                                        <td style={tdStyle}>{employee.lastName}</td>
                                        <td style={tdStyle}>{employee.emailId}</td>
                                        <td style={tdStyle}>
                                            <button style={updateBtn} onClick={() => this.editEmployee(employee.id)}>Update</button>
                                            <button style={deleteBtn} onClick={() => this.deleteEmployee(employee.id)}>Delete</button>
                                            <button style={viewBtn} onClick={() => this.viewEmployee(employee.id)}>View</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;
