import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import EventDashboard from './event/EventDashboard';
import NavBar from './nav/NavBar';

class App extends Component {
  render() {
    return (
      <div > 
        <NavBar />
        <Container className='main'>
            <EventDashboard />
        </Container>
      </div>
    );
  }
}

export default App;
