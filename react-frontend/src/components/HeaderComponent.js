import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        const headerStyle = {
            backgroundColor: '#000e4a', // Softer, calmer blue
            color: '#ffffff',
            padding: '15px 30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
            fontFamily: 'Segoe UI, sans-serif',
            position: 'sticky',
            top: 0,
            zIndex: 1000
        };

        const brandStyle = {
            textDecoration: 'none',
            color: '#ffffff', // White for clean contrast
            fontSize: '22px',
            fontWeight: 'bold',
            transition: 'color 0.3s ease'
        };

        return (
            <div>
                <header>
                    <nav style={headerStyle}>
                        <a href="https://javaguides.net" style={brandStyle}>Employee Management App</a>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;
