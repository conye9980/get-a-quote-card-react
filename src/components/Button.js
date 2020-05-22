import React, { Component } from 'react'

export class Button extends Component {
    render() {
        return (
            <div style={btnStyles}>
                Get A Quote
            </div>
        )
    }
}
let btnStyles = {
    
        color: '#fff',
        height: '44px',
        width: '168px',
        background: '#23817A',
        borderRadius: '32px',
        fontWeight: 'bold',
        fontSize: '16px',
        border: 'none',
        alignItems: 'center',
        boxShadow: '0 0 1px rgba(0, 0, 0, 0)',
        display: 'flex',
        justifyContent: 'center',
        margin: '24px',
        
}
export default Button
