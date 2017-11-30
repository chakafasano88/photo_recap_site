import React from 'react';
import ImageGallery from 'react-image-gallery';
import PropTypes from 'prop-types';
import "react-image-gallery/styles/css/image-gallery.css";

class Spa extends React.Component {
  render(){
    const images = [
      {
        original: 'http://lorempixel.com/1000/600/nature/1/',
        thumbnail: 'http://lorempixel.com/250/150/nature/1/',
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      }
    ]

    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
        <ImageGallery
          items={images}
        />
        </div>
      </div>
    );
  }
}



export default Spa;
