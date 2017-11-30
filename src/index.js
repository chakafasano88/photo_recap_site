import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Menu from './components/Menu';
import Spa from './components/Spa'
import Gym from './components/Gym';
import Chicago from './components/Chicago';
import Walls from './components/Walls';
import PropTypes from 'prop-types'; // ES6
import "react-image-gallery/styles/css/image-gallery.css";

import './css/style.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

const Root = () => (
  <Router>
    <div >
      <Menu />
      <Route exact path="/" component={App}/>
      <Route path="/spa" component={Spa}/>
      <Route path="/gym" component={Gym}/>
      <Route path="/walls" component={Walls}/>
      <Route path="/chicago" component={Chicago}/>
    </div>
  </Router>
)


render(<Root  />, document.getElementById('root'));
