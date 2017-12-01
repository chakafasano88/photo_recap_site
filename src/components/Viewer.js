import React from 'react';
import ImageViewer from 'react-image-gallery';

class Viewer extends React.Component {
  render() {
    const style = {
      width: 400,
      height: 300,
      backgroundSize: 'cover'
    };
    const config = {
      viewedImageSize: 0.8,
      backgroundOpacity: 0.6
    };
    return (
      <div>
        <ImageViewer
          style={style}
          config={config}
          image={"./images/1.jpg"}
        />
      </div>
    );
  }
}

export default Viewer;
