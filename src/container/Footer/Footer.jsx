import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { images } from '../../constants';

import './Footer.css';
import { FooterOverlay, Newsletter } from '../../components';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />
  </div>
);

export default Footer;
