import React from 'react';
import ImageGallery from 'react-image-gallery';
import PropTypes from 'prop-types';
import "react-image-gallery/styles/css/image-gallery.css";


// import { Link } from 'react-router-dom';

class Chicago extends React.Component {
  render(){
    const images = [
      {
        original: './images/1.jpg',
        thumbnail: './images/1.jpg',
      },
      {
        original: './images/2.jpg',
        thumbnail: './images/2.jpg'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      }
    ]

    return (
      <div className="row container justify-content-center">
        <div className="col-4">
        </div>
        <div className="col-6">
        <ImageGallery
          items={images}
        />
        </div>
      </div>
    );
  }
}




export default Chicago;
