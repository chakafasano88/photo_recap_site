import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import App from './components/App';
import Menu from './components/Menu';
import Spa from './components/Spa'
import Gym from './components/Gym';
import Chicago from './components/Chicago';
import Walls from './components/Walls';
import './css/style.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

const Root = () => (
  <Router>
    <div className="">
      <Menu />
      <Route exact path="/" component={App}/>
      <Route path="/spa" component={Spa}/>
      <Route path="/gym" component={Gym}/>
      <Route path="/walls" component={Walls}/>
      <Route path="/chicago" component={Chicago}/>
    </div>
  </Router>
)


render(<Root className="align-middle" />, document.getElementById('root'));
