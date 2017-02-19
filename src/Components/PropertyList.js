import React from 'react';

import Property from './Property';

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

PropertyList.propTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.string,
    type: React.PropTypes.string,
    attributes: React.PropTypes.shape({
      title: React.PropTypes.string,
      url: React.PropTypes.string,
    }),
  })),
};

export default PropertyList;
