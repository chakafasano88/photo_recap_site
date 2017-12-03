import React from 'react';
import Image from './Image.js'
import wallImg from '../sample_images/wall-images';

class Wall extends React.Component {
  constructor(){
    super();
    this.loadSamples = this.loadSamples.bind(this);
  }

  state = {
    images: {}
  }

  componentWillMount(){
    this.loadSamples()
  }

  loadSamples() {
    this.setState({
      images: wallImg
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <h1>Wall Inspirations</h1>
        <div className="row justify-content-center">
          {Object.keys(this.state.images)
            .map(key => <Image key={key} details={this.state.images[key]} />)}
        </div>
      </div>
    );
  }
}

export default Wall;
