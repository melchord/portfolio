import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { Circles } from '../../components';

const Component = ({ children, title }) => (
  <div className='layout'>
    <Helmet>
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css2?family=Aguafina+Script&family=Montserrat&display=swap'
      />
      <link rel='shortcut icon' href='./logo.ico' />
      <title>{title}</title>
    </Helmet>
    {children}
    <Circles />
  </div>
);

Component.displayName = 'Layout';

Component.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  title: PropTypes.string,
};

Component.defaultProps = {
  title: 'default title',
};

export default Component;
