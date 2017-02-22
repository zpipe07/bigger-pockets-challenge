import React from 'react';

import './LoadingProperties.css';

/**
 * Display an animated loader on initial render
 * @return {JSX} Animated loader
 */
const LoadingProperties = () => {
  return (
    <div className="loading__wrapper">
      <i className="loading__icon fa fa-spinner fa-pulse fa-3x fa-fw"></i>
    </div>
  );
}

export default LoadingProperties;
