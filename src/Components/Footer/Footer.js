import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className='insta-container'>인스타그램</div>
        <div className='footer-container'>
          <div className='footer-nav-container'>
            <div className='footer-nav-wrap'>푸터메뉴바</div>
          </div>
          <div className='copyrignt-container'>copyrignt</div>
        </div>
      </footer>
    );
  }
}

export default Footer;
