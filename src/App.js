

import Card from './components/Card'
import React, { Component } from 'react'

export class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      product: ''
    }
  };
  
  render() {
    
    return (
      <div style={containerStyles}>
        <Card product="OnePlan Protections" blurb="With OnePlan Protection, we can help you protect your family's income with life insurance, but also if you can't work because of illness or injury."/>
        <Card product="Income Protections" blurb="With Income Protection you will receive a replacement income if you cannot work due to illness or injury after a certain period of time."/>
        <Card product="Mortgage Protections" blurb="With Mortgage Protection you can be assured your mortgage will be protected and paid off in cases of death or illness."/>
      </div>
    )
  }
}
let containerStyles ={
  maxWidth:'960px',
  display: 'flex',
  flexFlow: 'row wrap',
}

export default App
