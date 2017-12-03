import React from 'react';
import Image from './Image.js';
import gymImg from '../sample_images/gym-images';
import Viewer from 'react-viewer';
import 'react-viewer/dist/index.css';

class Gym extends React.Component {
  constructor(){
    super();
    this.loadSamples = this.loadSamples.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    showComponent: false,
    images: {},
    visible: false
  }

  handleClick() {
    this.setState({
      showComponent: true
    });
  };

  componentWillMount(){
    this.loadSamples()
  };

  loadSamples() {
    this.setState({
      images: gymImg
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="title-borders col-12 text-center"><h1>World Gym Philadelphia</h1></div>
        <div className="row justify-content-center">
            {Object.keys(this.state.images)
              .map(key => <Image key={key} details={this.state.images[key]} />)
            }
        </div>
      </div>
    );
  }
}

export default Gym;
