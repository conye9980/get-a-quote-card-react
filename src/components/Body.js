import React, { Component } from 'react'
import Button from './Button'


export class Body extends Component {
    constructor(props){
        super(props);
        this.state = {
            product: 'OnePlan protection',
            blurb: 'With OnePlan Protection, we can help you protect your familys income with life insurance, but also if you cant work because of illness or injury.'
        };
    }
    
    render() {
        
        return (
            <div>
            <div>
                <p style={bodyStyles}>{this.props.blurb}</p>
                <Button />
            </div>
            </div>
            
        )
    }
}
let bodyStyles = {
    margin: '10px',
    display: 'flex',
    minHeight: '100px',

}
export default Body
