import React from 'react';
import Boundary from './boundary';

/**
 * Function that will bind state changes in a container with UI component.
 *
 * The purpsoe of this function is to take out the difficult portion of learning react -
 * 'How can I update the state of a component when I don't have access to the component itself?'.
 * Creating a Boundary allows everything to be combined within the boundary using a Container (where
 * we handle state changes ) and a Component ( where we render the user inferface ).
 * Allowing these t obe separate creates better isolation which leads to better testing and
 * faster development time.
 *
 * @param {Element} Component - The user interface component to be rendered.
 * @param {Object} getComponentProps - Transforms the given paramets to necessary state changes. (sometimes unchanged)
 * @param {Object} propTypes - The propTypes necessary for the Container and/or Component.
 * @param {Object} defaultProps - Thge default state of props if not given.
 *
 * @return {Element} Returns a react element that has combined the container with the component.
 */
export default (Component, getComponentProps, propTypes, defaultProps, displayName) => {
  const Container = (props) => <Component {...getComponentProps(props)} />;
  Container.displayName = `${displayName} || DEFAULT_NAME`;
  Container.propTypes = propTypes || Component.propTypes;
  Container.defaultProps = defaultProps || Component.defaultProps;

  return Boundary(Container);
};
