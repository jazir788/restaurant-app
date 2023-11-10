import React from 'react';

import './Chef.css';

import { images } from '../../constants';
import { SubHeading } from '../../components';
import { MdImageNotSupported } from 'react-icons/md';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app_wrapper_img_reverse'>
      <img src={images.chef} alt='chef'/>  
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word" />
      <h1 className='headtext__cormorant'> What we believe in</h1>

      <div className='app__chef-content'>
        <div className='app__cheff-content-quote'>
          <img src={images.quote} alt='quote' />
          <p className='p__opensans'> Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum</p>
        </div>
        <p className='p__opensans'>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
      </div>

      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'> Chef & Founder</p>
        <img src={images.sign} alt='signature' />
      </div>


    </div>
  </div>
);

export default Chef;
