import React, { Component } from 'react'

export class NavBar extends Component {
    render() {
        return (
            <div style={navBarStyles}>
                <ul className="d-flex" style={ulStyles}>
                    <li>Life Insurance</li>
                    <li>Pensions</li>
                    <li>Investments</li>
                </ul>
            </div>
        )
    }
}
let navBarStyles = {
    minWidth: '200%',
    height: '50px',
    background: '#fff',
    boxShadow:'0px 1px 1px #de1dde',

}

let ulStyles = {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute,',
    left: '50%',
    transform: 'translatex(-50%)',
}
export default NavBar
