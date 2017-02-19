import React from 'react';

const Property = (props) => {
  return (
    <li className="property">
      <h3>{props.title}</h3>
      <h4>{props.url}</h4>
    </li>
  );
}

export default Property;
