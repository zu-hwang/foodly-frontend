import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faPinterest,
  faInstagram,
  faYoutube,
  faTumblr,
  faCcVisa,
  faCcMastercard,
  faCcPaypal,
  faCcDiscover,
  faCcAmex,
  faCcDinersClub
} from '@fortawesome/free-brands-svg-icons';

import './Footer.scss';

class Footer extends Component {
  render() {
    const cardIconSize = '3x';
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
                  <FontAwesomeIcon icon={faFacebookF} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faTwitter} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faPinterest} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faInstagram} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faYoutube} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faTumblr} />
                </li>
              </ul>
            </div>
            <div className='box-wrap'>
              <p>payment methods</p>
              <ul className='card-list'>
                <li>
                  <FontAwesomeIcon icon={faCcVisa} size={cardIconSize} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faCcMastercard} size={cardIconSize} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faCcAmex} size={cardIconSize} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faCcPaypal} size={cardIconSize} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faCcDinersClub} size={cardIconSize} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faCcDiscover} size={cardIconSize} />
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
