import React from 'react';
import ImageViewer from 'simple-image-viewer';
import 'simple-image-viewer/lib/styles.css';

class Image extends React.Component {
  constructor(){
    super();
    this.toggleHidden = this.toggleHidden.bind(this)
    this.state = {
      isHidden: true
    }
  }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render(){
    const chicagoImages = [
      "./images/1.jpg",
      "./images/2.jpg",
      "./images/3.jpg"
    ];

    return (
      <div>
        <ImageViewer className="image-viewer-container"

          images={chicagoImages}
          index={0}
          handleClose={this.toggleHidden}
          display={this.state.display}
        />
        {!this.state.isHidden && <ImageViewer />}
      </div>
    );
  }
}

export default Image;
