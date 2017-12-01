import React from 'react';
import { Link } from 'react-router-dom';


class Menu extends React.Component {
  render() {
    return (
        <nav className="row justify-content-start navbar navbar-toggleable-md navbar-light bg-light mx-auto">
          <div className="col-1">
            <Link to="/"><img className="logo" src="./images/tags_logo.png" alt=""/></Link>
          </div>
          <div className="col">
          </div>
          <div className="col-lg-auto dropdown">
            <a className="btn-lg btn-primary dropdown-toggle" href="" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Gyms
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
              <Link className="dropdown-item " to="/spa">IvySpaClub</Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="/gym">World Gym</Link>
            </div>
          </div>
          <div className="col-md-auto dropdown">
            <a className="btn-lg btn-primary dropdown-toggle" href="" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               Music Venues
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <Link className="dropdown-item" to="/chicago">Chicago Venues</Link>
            </div>
          </div>
          <div className="col-md-auto dropdown">
            <a className="btn-lg btn-primary dropdown-toggle" href="" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Wall Inspirations
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <Link className="dropdown-item" to="/walls">Walls</Link>
            </div>
          </div>
        </nav>
    );
  }
}

export default Menu;
