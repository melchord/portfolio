import React from 'react';
import PropTypes from 'prop-types';
import { Col, Card } from 'react-bootstrap';

import './index.scss';

const Component = ({ logo, title, text }) => {
  return (
    <Col md={12}>
      <Card className='skills-card'>
        <Card.Header>{logo}</Card.Header>
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
