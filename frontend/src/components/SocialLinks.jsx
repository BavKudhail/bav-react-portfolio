import React from 'react';
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';

const SocialLinks = () => {
  return (
    <div className='app__social'>
      <div>
        <a
          target='_blank'
          href='https://twitter.com/bavkudhail'
          rel='noreferrer'
        >
          <BsTwitter />
        </a>
      </div>
      <div>
        <a
          target='_blank'
          href='https://www.linkedin.com/in/bav-kudhail/'
          rel='noreferrer'
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          target='_blank'
          href='https://www.github.com/bavkudhail'
          rel='noreferrer'
        >
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
