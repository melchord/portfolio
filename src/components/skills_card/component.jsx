import React from 'react';
import PropTypes from 'prop-types';
import { Col, Card } from 'react-bootstrap';

import './index.scss';

const Component = ({ logo, title, text }) => {
  return (
    <Col xs={12} md={4}>
      <Card className='skills-card'>
        <Card.Img variant='top' src={logo} />
        <Card.Title>{title}</Card.Title>
        <Card.Body>{text}</Card.Body>
      </Card>
    </Col>
  );
};

Component.displayName = 'SkillsCard';

Component.propTypes = {
  logo: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Component;
