import React, { Component } from 'react'


export class Body extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
          };
        }
      
        componentDidMount() {
          fetch('/data.json')
            .then(res => res.json())
            .then(
              (result) => {
                this.setState({
                  isLoaded: true,
                  items: result.items
                });
              },
              // Note: it's important to handle errors here
              // instead of a catch() block so that we don't swallow
              // exceptions from actual bugs in components.
              (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
              }
            )
        }
    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <ul>
              {items.map(item => (
                <li key={item.id} style={bodyStyles}>
                  {item.name} {item.text}
                </li>
              ))}
            </ul>
          );
        }
      }
    }

let bodyStyles = {
    margin: '10px',
    display: 'flex',
    minHeight: '100px',
    position: 'relative'

}
export default Body
