import React from 'react';

import Property from './Property';

// const GifList = props => {
const PropertyList = (props) => {
  const properties = props.data.map((property) => {
      return <Property title={property.attributes.title}
                       url={property.attributes.url}
                       key={property.id} />;
    }
  );

  return (
    <ul className="properties">
      {properties}
    </ul>
  );
}

export default PropertyList;
