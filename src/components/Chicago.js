import React from 'react';


class Chicago extends React.Component {
  render(){
    return (
      <div className="">
        <h2>Aragon Ballroom</h2>
        <div className="row justify-content-center">
          <a href="./images/1.jpg" data-toggle="lightbox" data-title="A random title" data-footer="A custom footer text">
            <img src="./images/1.jpg" class="img-fluid" />
          </a>
          <a href="./images/3.jpg" data-toggle="lightbox" data-title="A random title" data-footer="A custom footer text">
            <img src="./images/3.jpg" class="img-fluid" />
          </a>
        </div>
      </div>
    )
  }
}

export default Chicago;
