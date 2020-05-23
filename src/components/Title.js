import React, { Component } from 'react'
import Icon from '@mdi/react'
import { mdiAccount } from '@mdi/js'
export class Title extends Component {
    render() {
        return (
            <div className="d-flex">
                <Icon path={mdiAccount}
                    title="User Profile"
                    size={2}
                    color="#5261AC"
                    />
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
