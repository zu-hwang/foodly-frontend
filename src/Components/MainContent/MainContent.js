import React, { Component } from "react";
import "./MainContent.scss";

class MainContent extends Component {
  render() {
    return (
      <>
        <div className="main-container">
          <div className="slide-banner-wrap">
            <div className="img-container">
              <ul>main - content</ul>
            </div>
            {/* <div className='btn-container'>
              <div className='img-btn-wrap'>btn-1</div>
              <div className='img-btn-wrap'>btn-2</div>
              <div className='img-btn-wrap'>btn-3</div>
            </div> */}
          </div>
        </div>
      </>
    );
  }
}

export default MainContent;
