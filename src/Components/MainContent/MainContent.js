import React, { Component } from 'react';
import './MainContent.scss';

class MainContent extends Component {
  render() {
    return (
      <>
        <div className='main-container'>
          <div className='slide-banner-wrap'>
            <div className='img-container'>
              <ul>{/* 여기에 배너 슬라이드 컴포넌트? */}</ul>
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
