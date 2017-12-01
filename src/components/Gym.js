import React from 'react';
import Image from './Image.js';
import Viewer from './Viewer.js';
import gymImg from '../sample_images/gym-images';
import 'simple-image-viewer/lib/styles.css'

class Gym extends React.Component {
  constructor(){
    super();
    this.loadSamples = this.loadSamples.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    showComponent: false,
    images: {}
  }

  handleClick() {
    this.setState({
      showComponent: true,
    });
  }

  componentWillMount(){
    this.loadSamples()
  }

  loadSamples() {
    this.setState({
      images: gymImg
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <button onClick={this.handleClick}>Button
            {Object.keys(this.state.images)
              .map(key => <Image key={key} details={this.state.images[key]} />)
            }
          </button>
          {this.state.showComponent ? <Viewer /> :null}


        </div>
      </div>
    );
  }
}

export default Gym;
