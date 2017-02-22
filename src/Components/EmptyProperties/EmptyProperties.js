import React from 'react';

import './EmptyProperties.css';

/**
 * Display a simple message when there are no properties
 * @return {JSX} No properties message
 */
const EmptyProperties = () => {
  return (
    <div className="empty-properties__wrapper">
      <p className="empty-properties__text">No properties saved.</p>
    </div>
  );
}

export default EmptyProperties;
