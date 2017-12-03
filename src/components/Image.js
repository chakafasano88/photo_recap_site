import React from 'react';
import Viewer from 'react-viewer';
import gymImg from '../sample_images/gym-images';
import 'react-viewer/dist/index.css';
// import ImageGallery from 'react-image-gallery';


class Image extends React.Component {
  constructor() {
    super();

    this.state = {
      visible: false,
      images: {}
    };
  }

  componentWillMount(){
    this.loadSamples()
  };

  loadSamples() {
    this.setState({
      images: gymImg
    });
  };


  render(){
    const dog = 'https://www.w3schools.com/w3css/img_fjords.jpg'
    return (
        <div className="image-container border-top-0 mt-20">
          <a className="photo-links" onClick={() => { this.setState({ visible: !this.state.visible }); } }>
            <img className="rounded img-thumbnail" src={this.props.details.image} alt=""/>
          </a>
          <div>
              <Viewer
                visible={this.state.visible}
                onClose={() => { this.setState({ visible: false }); } }
                images={[
                  {src: `${this.props.details.image}`, alt: '', name: ''}
                ]}
              />
          </div>
        </div>
    );
  }
}

export default Image;
