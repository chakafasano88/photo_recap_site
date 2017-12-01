import React, { Component } from 'react';
import sampleImages from '../sample-images';

class App extends Component {
  render(){
    return (
      <div className="container-fluid">
        <div className="row justify-content-start">
          <div className="col-5">
            <p>View this shit now</p>
          </div>
          <h2>Image Recap</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-2">Welcome to our Pge its really fun and great</div>
          <div className="col-2">aWelcome to our Pge its really fun and great</div>
          <div className="col-4">aWelcome to our Pge its really fun and great</div>
          <div className="col-2">aWelcome to our Pge its really fun and great</div>
          <div className="col-2">aWelcome to our Pge its really fun and great</div>
        </div>
      </div>
    )
  }
}

export default App;
