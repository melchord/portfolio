import React from 'react';
import PropTypes from 'prop-types';
import { Col, Card } from 'react-bootstrap';

import './index.scss';

const Component = ({ title, summary, tags, link }) => {
  tagsBody = tags.map((tag, index) => {
    return <span key={index}>{tag}</span>;
  });
  return (
    <Col xs={12} md={6}>
      <Card className='project-card'>
        <Card.Title>
          <a href={link}>{title}</a>
        </Card.Title>
        <Card.Body>
          {summary}
          <div className='line' />
          {tagsBody}
        </Card.Body>
      </Card>
    </Col>
  );
};

Component.displayName = 'ProjectCard';

Component.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  link: PropTypes.string,
};
