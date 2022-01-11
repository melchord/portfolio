import React from 'react';
import PropTypes from 'prop-types';
import { AiFillGithub, AiOutlineLinkedin, AiOutlineMail, AiOutlineCodepen } from 'react-icons/ai';

import './index.scss';

const Component = ({ type, link }) => {
  var button = '';
  var customLink = link;
  switch (type) {
    case 'github':
      button = <AiFillGithub size={25} />;
      break;
    case 'linked-in':
      button = <AiOutlineLinkedin size={25} />;
      break;
    case 'email':
      customLink = 'mailto:' + link;
      button = <AiOutlineMail size={25} />;
      break;
    case 'codepen':
      button = <AiOutlineCodepen size={25} />;
      break;
    default:
      break;
  }
  return (
    <a className='link-button' href={customLink} target='_blank' rel='noreferrer'>
      {button}
    </a>
  );
};

Component.displayName = 'LinkButton';

Component.propTypes = {
  type: PropTypes.string,
  link: PropTypes.string,
};

export default Component;
