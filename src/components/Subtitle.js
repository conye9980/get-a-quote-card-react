import React, { Component } from 'react'

export class Subtitle extends Component {
    render() {
        return (
            <div style={subtitleStyles}>
                <p>You can get a quote for any of our Life Insurance products.
OnePlan Protection, Term Life Insurance, Mortgage Protection, Whole of Life Insurance or Income Protection.</p>
            </div>
        )
    }
}
let subtitleStyles = {
    margin: '5px',
}
export default Subtitle
