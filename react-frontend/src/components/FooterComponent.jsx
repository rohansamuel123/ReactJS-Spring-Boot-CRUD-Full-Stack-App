import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const footerStyle = {
            position: 'fixed',
            bottom: '0',
            width: '100%',
            backgroundColor: '#000e4a', // Softer blue background
            color: 'white',
            textAlign: 'center',
            padding: '15px 0',
            fontSize: '14px',
            fontFamily: 'Segoe UI, sans-serif',
            boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)' // Light shadow for subtle depth
        };

        return (
            <div>
                <footer style={footerStyle}>
                    <span>All Rights Reserved © 2025 &nbsp;|&nbsp; Built with React by Jali Pramod</span>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;
