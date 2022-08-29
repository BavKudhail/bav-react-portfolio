import React from 'react';
import { motion } from 'framer-motion';
import './Header.css';
import { Wrapper } from '../../hoc';
import BlobAnimation from '../../components/BlobAnimation';
import { SocialLinks } from '../../components';
import Wave from '../../components/Wave';

const Header = () => {
  return (
    <>
      <div className='header'>
        <div>
          {/* <BlobAnimation /> */}
          <div className='header__container'>
            <div>
              <h1>
                Hey there, <br /> I'm
                <span className='name'> Bav Kudhail</span>
              </h1>
              <p>I build stunning web applications for your users</p>
              <a href='#contact'>
                <button className='CTA'>Let's Talk</button>
              </a>
            </div>
          </div>
        </div>
        <SocialLinks />
      </div>
    </>
  );
};

export default Wrapper(Header, 'home');
