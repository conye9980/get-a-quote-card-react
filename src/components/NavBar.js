import React, { Component } from 'react'

export class NavBar extends Component {
    render() {
        return (
            
                <div class="full-width" style={navBarStyles}>
                   <ul style={ulStyles}>
                       <li style={liStyles}>Life Insurance</li>
                       <li style={liStyles}>Health Insurance</li>
                       <li style={liStyles}>Pensions</li>
                       <li style={liStyles}>Investments</li>
                   </ul>
                </div>
            
            
        )
    }
}
let navBarStyles = {
    minWidth: '200%',
    height: '100%',
    background: '#fff',
    boxShadow:'0px 1px 1px #de1dde',

}

let ulStyles = {
    display: 'flex',
    justifyContent: 'center',
    color: '#606060',
    

}

let liStyles = {
    padding: '20px 20px',
    listStyleType: 'none',
}
export default NavBar
