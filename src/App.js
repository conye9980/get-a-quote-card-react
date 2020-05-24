

import Card from './components/Card'
import React, { Component } from 'react'
import Subtitle from './components/Subtitle'
import PageTitle from './components/PageTitle'
import TopBar from './components/TopBar'
import NavBar from './components/NavBar'


export class App extends Component {
  constructor(props){
    super(props)
    
  };
  
  render() {
   
    return (
      <div style={containerStyles}>
        <TopBar />
        <NavBar />
        <PageTitle />
        <Subtitle />
        <Card />
        
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
