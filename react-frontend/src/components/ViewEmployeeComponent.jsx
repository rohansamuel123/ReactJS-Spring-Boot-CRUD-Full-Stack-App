import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        };
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then(res => {
            this.setState({ employee: res.data });
        });
    }

    render() {
        const containerStyle = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: '#e0f7fa', // Light cyan background
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
            color: '#000e4a', // Blue title
            fontSize: '24px'
        };

        const rowStyle = {
            marginBottom: '15px'
        };

        const labelStyle = {
            fontWeight: 'bold',
            color: '#374151',
            marginBottom: '4px'
        };

        const valueStyle = {
            fontSize: '16px',
            color: '#1f2937',
            backgroundColor: '#f3f4f6',
            padding: '8px 12px',
            borderRadius: '8px'
        };

        return (
            <div style={containerStyle}>
                <div style={cardStyle}>
                    <h3 style={titleStyle}>View Employee Details</h3>
                    <div style={rowStyle}>
                        <div style={labelStyle}>Employee First Name:</div>
                        <div style={valueStyle}>{this.state.employee.firstName}</div>
                    </div>
                    <div style={rowStyle}>
                        <div style={labelStyle}>Employee Last Name:</div>
                        <div style={valueStyle}>{this.state.employee.lastName}</div>
                    </div>
                    <div style={rowStyle}>
                        <div style={labelStyle}>Employee Email ID:</div>
                        <div style={valueStyle}>{this.state.employee.emailId}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewEmployeeComponent;
