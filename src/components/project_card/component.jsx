import React from 'react';
import PropTypes from 'prop-types';
import { Col, Card } from 'react-bootstrap';

import './index.scss';

const Component = ({ title, summary, tags, link }) => {
  const tagsBody = tags.map((tag, index) => {
    return <span key={index}>{tag}</span>;
  });
  console.log(title);
  return (
    <Col xs={12} md={6}>
      <Card className='project-card'>
        <Card.Title>
          <a href={link}>{title}</a>
        </Card.Title>
        <Card.Body>
          {summary}
          <div className='line' />
          <div className='tags'>{tagsBody}</div>
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

export default Component;
