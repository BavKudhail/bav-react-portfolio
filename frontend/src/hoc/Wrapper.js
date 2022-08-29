import React from 'react';
import { SocialLinks } from '../components';
import BlobAnimation from '../components/BlobAnimation';

const Wrapper = (Component, idName, classNames) =>
  function HOC() {
    return (
      // using the app__container class to create default styling for all sections
      <div id={idName} className={`app__container ${classNames}`}>
        <div className='app__wrapper app__flex'>
          {/* Component below refers to the section passed as a param, (About, Header, Footer, etc) */}
          <Component />
        </div>
      </div>
    );
  };

export default Wrapper;
