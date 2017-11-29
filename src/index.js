import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Spa from './components/Spa'
import Gym from './components/Gym';
import Chicago from './components/Chicago';
import Walls from './components/Walls';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

const Root = () => (
  <Router>
    <div>
      <hr/>
      <Route exact path="/" component={App}/>
      <Route path="/spa" component={Spa}/>
      <Route path="/gym" component={Gym}/>
      <Route path="/walls" component={Walls}/>
      <Route path="/chicago" component={Chicago}/>
    </div>
  </Router>
)


render(<Root />, document.getElementById('root'));
