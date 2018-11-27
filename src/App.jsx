import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './features/home/HomePage';
import EventDashboard from './features/event/EventDashboard/EventDashboard';
import NavBar from './features/nav/NavBar';
import EventForm from './features/event/EventForm/EventForm';
import SettingsDashboard from './features/user/Settings/SettingsDashboard';
import UserDetailedPage from './features/user/UserDetailed/UserDetailedPage';
import PeopleDashboard from './features/user/PeopleDashboard/PeopleDashboard';
import EventDetailedPage from './features/event/EventDetailed/EventDetailedPage'

class App extends Component {
  render() {
    return (
      <div > 
        <switch>
          <Route exact path='/' component={HomePage} />
        </switch>

        <Route path='/(.+)' render={() => (
          <div > 
          <NavBar />
          <Container className='main'>
            <Switch>
              <Route path='/events' component={EventDashboard} />
              <Route path='/events/:id' component={EventDetailedPage} />
              <Route path='/people' component={PeopleDashboard} />
              <Route path='/profile/:id' component={UserDetailedPage} />
              <Route path='/settings' component={SettingsDashboard} />
              <Route path='/createEvents' component={EventForm} />
            </Switch>
              
          </Container>
          </div>
        )}/>
      </div>
    );
  }
}

export default App;
