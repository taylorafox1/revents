import React, { Component } from 'react';
import EventDashboard from './event/EventDashboard';
import NavBar from './nav/NavBar';

class App extends Component {
  render() {
    return (
      <div > 
        <NavBar />
        <h1>Re-vents</h1>
        <EventDashboard />
       
      </div>
    );
  }
}

export default App;
