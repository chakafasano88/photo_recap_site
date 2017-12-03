import React, { Component } from 'react';
import sampleImages from '../sample-images';

class App extends Component {
  render(){
    return (
      <div className="container-fluid">
        <div className="row justify-content-start">
        </div>
        <div className="row justify-content-center">
          <div className="col-1"></div>
          <div className="col-1"></div>
          <div className="mt-20 col-6 text-center">
            <h1>Image Recap</h1>
          </div>
          <div className="col-1"></div>
          <div className="col-1"></div>
          <div className="mt-20 row just text-center">
              <h2>Click the menu tabs above to browse photos! </h2>
          </div>
        </div>

      </div>
    )
  }
}

export default App;
