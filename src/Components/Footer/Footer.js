import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faAddressBook } from '@fortawesome/free-solid-svg-icons';

import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className='insta-container'>
          <p className='title'>instagram</p>
          <p className='sub-title'>
            let’s have a look what is behind the scenes
          </p>
          <div className='insta-pic-container'>
            <div>사진들</div>
          </div>
        </div>
        <div className='footer-container'>
          <div className='center-wrap'>
            <div className='box-wrap'>
              <p>more info</p>
              <ul>
                <li>About us</li>
                <li>Search</li>
                <li>Term &#38; Conditions</li>
                <li>Return Policy</li>
              </ul>
            </div>
            <div className='box-wrap'>
              <p>foodly family</p>
              <ul>
                <li>Food Markets</li>
                <li>Eco-activity</li>
                <li>Awards</li>
                <li>Recipes</li>
              </ul>
            </div>
            <div className='box-wrap'>
              <p>follow us</p>
              <ul className='icon-list'>
                <li>
                  <FontAwesomeIcon icon={faAddressBook} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faCoffee} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faCoffee} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faCoffee} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faCoffee} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faCoffee} />
                </li>
              </ul>
            </div>
            <div className='box-wrap'>
              <p>payment methods</p>
              <ul className='card-list'>
                <li>
                  <FontAwesomeIcon icon={faCoffee} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faCoffee} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faCoffee} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faCoffee} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faCoffee} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faCoffee} />
                </li>
              </ul>
            </div>
          </div>
          <div className='copyrignt-container'>
            <p>© 2020, foodly-store. All rights reserved.</p>
            <p>Foodly</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
