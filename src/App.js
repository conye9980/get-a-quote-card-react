

import Card from './components/Card'
import React, { Component } from 'react'
import Subtitle from './components/Subtitle'
import PageTitle from './components/PageTitle'
import TopBar from './components/TopBar'
import NavBar from './components/NavBar'

export class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      product: 'One Plan Protection'
    }
  };
  
  render() {
   
    return (
      <div style={containerStyles}>
        <TopBar />
        <NavBar />
        <div style={{marginTop:'50px'}}>
        <PageTitle />
        <Subtitle />
        </div>
        <Card product={this.state.product} blurb="With OnePlan Protection, we can help you protect your family's income with life insurance, but also if you can't work because of illness or injury."/>
        <Card product="Income Protection" blurb="With Income Protection you will receive a replacement income if you cannot work due to illness or injury after a certain period of time."/>
        <Card product="Mortgage Protections" blurb="With Mortgage Protection you can be assured your mortgage will be protected and paid off in cases of death or illness."/>
        <Card product="Whole of Life Insurance" blurb="With Mortgage Protection you can be assured your mortgage will be protected and paid off in cases of death or illness."/>
        
      </div>
    )
  }
}
let containerStyles = {
  maxWidth:'960px',
  display: 'flex',
  flexFlow: 'row wrap',
  margin: '0px 25%',
  justifyContent: 'center',
}

export default App
