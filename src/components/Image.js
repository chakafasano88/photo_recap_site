import React from 'react';
import ImageGallery from 'react-image-gallery';


class Image extends React.Component {
  render(){

    return (
      <div>
        <img src={this.props.details.image} alt=""/>
      </div>
    );
  }
}

export default Image;
