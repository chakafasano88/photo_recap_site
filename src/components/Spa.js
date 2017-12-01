import React from 'react';
import Image from './Image.js'
import spaImg from '../sample_images/spa-images';

class Spa extends React.Component {
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
      images: spaImg
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          {Object.keys(this.state.images)
            .map(key => <Image key={key} details={this.state.images[key]} />)}
        </div>
      </div>
    );
  }
}

export default Spa;
