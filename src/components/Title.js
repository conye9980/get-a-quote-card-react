import React, { Component } from 'react'

export class Title extends Component {
    render() {
        return (
            <div>
            <p style={titleStyles}>{this.props.product}</p>  
            </div>
        )
    }
}
let titleStyles = {
    fontFamily: 'Lato',
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#333',
    margin: '10px',

}
export default Title
