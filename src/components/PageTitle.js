import React, { Component } from 'react'

export class PageTitle extends Component {
    render() {
        return (
            <div style={pageTitleStyles}>
                Get a Life Insurance Quote.
            </div>
        )
    }
}
let pageTitleStyles = {
    margin: '5px',
    fontSize: '48px',
}

export default PageTitle
