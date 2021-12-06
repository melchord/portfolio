import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { Circles } from '../../components';

const Component = ({ children, header }) => (
  <div className='layout'>
    <Helmet>
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css2?family=Aguafina+Script&family=Montserrat&display=swap'
      />
      <meta title='Melchor Dominguez' />
      <meta name='description' content='I am a software engineer located in Charlotte, NC.' />
      <link rel='shortcut icon' href='./logo.ico' />
      <title>{header}</title>
    </Helmet>
    {children}
    <Circles />
  </div>
);

Component.displayName = 'Layout';

Component.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  header: PropTypes.string,
};

Component.defaultProps = {
  header: 'default title',
};

export default Component;
