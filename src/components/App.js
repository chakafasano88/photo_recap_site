import React, { Component } from 'react';
import Spa from './Spa'
import Gym from './Gym';
import Chicago from './Chicago';
import Walls from './Walls';
import { Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        <div className="dropdown show">
          <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Gyms
          </a>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <Link className="dropdown-item" to="/spa">IvySpaClub</Link>
            <Link className="dropdown-item" to="/gym">World Gym</Link>
          </div>
        </div>
        <br/>
        <div className="dropdown show">
          <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             Music Venues
          </a>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <Link className="dropdown-item" to="/chicago">Chicago Venues</Link>
          </div>
        </div>
        <br/>
        <div className="dropdown show">
          <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Wall Inspirations
          </a>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <Link className="dropdown-item" to="/walls">Walls</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
