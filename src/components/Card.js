import React, { Component } from 'react'
import Title from './Title'
import Body from './Body'

export class Card extends Component {
    render() {
        return (
            <div style={cardStyles} className="container">
                <div className="">
                <Title product={this.props.product}/></div>
                <div className=""><Body blurb={this.props.blurb}/></div>
            </div>
        )
    }
}
let cardStyles = {
    minHeight: '120px',
    display: 'flex',
    flexFlow: 'row wrap',
    maxWidth: '400px'
}
export default Card
