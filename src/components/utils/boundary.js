import React from 'react';

/**
 * Boundary component creator that will wrap the functional component.
 *
 * The purpose of this function is to provide error checking and fallback for the compnent.
 *
 * @param {Function} Component - the component to be wrapped.
 *
 * @returns {Function} - the wrapped component.
 */
export default (Component) => {
  var componentName = 'Anonymous';
  if (Component.displayName) {
    componentName = `${Component.displayName}_Boundary`;
  }

  /**
   * Boundary component that will wrap the functional component.
   *
   * The purpose of this class is to provide basic utility needs for react.
   * Having this class allows us to use the same code for all components. This
   * will allow us to have a single place to handle errors and fallback.
   *
   * @class Boundary
   * @extends {React.Component}
   */
  class Boundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        hasError: false,
      };
    }

    /**
     * Function that will set the error state.
     *
     * @param {Object} error - the error object.
     * @returns {Object} - the state object which holds the error state.
     */
    static getDerivedStateFromError(error) {
      // Update state so that the next render will show the fallback UI.
      return { hasError: Boolean(error) };
    }

    /**
     * Function that will handle the error.
     *
     * @param {Object} error - the error object.
     * @param {Object} errorInfo - the info of the error.
     */
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      console.error(
        `${Boundary.displayName}.componentDidCatch();`,
        'error=',
        error,
        'errorInfo=',
        errorInfo && errorInfo.componentStack,
      );
    }

    render() {
      const { hasError } = this.state;
      if (hasError) {
        // You can render any custom fallback UI
        return <h1 className='text-danger'>*** REACT ERROR; {componentName}***</h1>;
      }

      return <Component {...this.props} />;
    }
  }

  Boundary.displayName = `${componentName}_BOUNDARY`;
  Boundary.propTypes = Component.propTypes;
  Boundary.defaultProps = Component.defaultProps;

  return Boundary;
};
