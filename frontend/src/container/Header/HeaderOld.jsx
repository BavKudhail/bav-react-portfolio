import React from 'react';
import { motion } from 'framer-motion';
import './Header.css';
import { Wrapper } from '../../hoc';
import BlobAnimation from '../../components/BlobAnimation';
import { SocialLinks } from '../../components';

// images
import bavAvatar from '../../assets/bav-avatar.gif';
import javascriptGlow from '../../assets/javascript-glow.png';
import reactGlow from '../../assets/react-glow.png';
import lightBulb from '../../assets/light-bulb.png';
import aboutAvatar from '../../assets/about_avatar.JPG';
import redux from '../../assets/redux.png';
import graphql from '../../assets/graphql.png';

const Header1 = () => {
  return (
    <>
      <div className='header'>
        <div>
          {/* <BlobAnimation /> */}
          <div className='header__container'>
            <div>
              <div className='sub-text-container'>
                <p className='sub-text'>Hey there, I'm </p>
              </div>
            </div>
          </div>
          <div className='blob-container'>
            {/* <motion.div
              className='tech-logo graphql-logo'
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              style={{ x: 100 }}
            >
              <img src={graphql} />
              <img className='blurred' src={graphql} />
            </motion.div> */}
            {/* <motion.div
              className='tech-logo bulb-logo'
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              style={{ x: 100 }}
            >
              <img src={lightBulb} />
            </motion.div> */}
            {/* <motion.div
              className='tech-logo react-logo'
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              style={{ x: 100 }}
            >
              <img className='tech-logo-img' src={reactGlow} />
            </motion.div> */}
            {/* <motion.div
              className='tech-logo javascript-logo'
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              style={{ x: 100 }}
            >
              <img className='tech-logo-img' src={javascriptGlow} />
            </motion.div> */}
            {/* <motion.div
              className='tech-logo redux-logo'
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              style={{ x: 100 }}
            >
              <img className='tech-logo-img' src={redux} />
              <img className='tech-logo-img blurred' src={redux} />
              <img className='tech-logo-img blurred' src={redux} />
            </motion.div> */}
            <div className='header_badge_container'>
              <div className='header__badge'>
                {/* image */}
                <div className='memoji_container'>
                  <img className='memoji' src={bavAvatar} />
                </div>
                <div className='memoji-line' />
                {/* content */}
                <div className='badge_content_container'>
                  <div className='badge_content'>
                    <div>
                      <span className='code-text'>creator ID card</span>
                    </div>
                    <div>
                      <h1 className='head-text'>Bav Kudhail</h1>
                    </div>
                    <div>
                      <p className='sub-text'>
                        I design and code awesome stuff
                      </p>
                    </div>
                    <div>
                      <span className='code-text'>ID: 0001112203033</span>
                    </div>
                    <div>
                      <span className='code-text'>valid untill 3075</span>
                    </div>
                    <SocialLinks />
                  </div>
                </div>
              </div>
            </div>
            {/* <motion.div
              className='fixed-blur'
              whileInView={{ scale: [0, 1] }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

const Header = () => {
  return (
    <div>
      <div className='hero'>
        <div className='heroGroup'>
          <h1>
            Hey there, <br /> I'm
            <span className='name'> Bav Kudhail</span>
          </h1>
          <p>I build stunning web applications for your users</p>
          <button className='CTA'>Let's Talk</button>
          <div className='techStack'>
            {/* <img src={reactLogo} width='50px' />
            <img src={graphQL} width='50px' />
            <img src={redux} width='50px' />
            <img src={sass} width='50px' />
            <img src={html} width='50px' />
            <img src={tailwind} width='50px' /> */}
          </div>
          {/* <Wave /> */}
        </div>
      </div>
    </div>
  );
};

export default Wrapper(Header, 'home');
