import React, { Component } from 'react';

import Property from './Property';

import './PropertyList.css';

class PropertyList extends Component {
  deleteProperty(id) {
    this.props.deleteProperty(id);
  }

  render() {
    const properties = this.props.data.map((property) => {
        return <Property title={property.attributes.title}
                         url={property.attributes.url}
                         id={property.id}
                         key={property.id}
                         onDelete={this.deleteProperty.bind(this)} />;
      }
    );

    return (
      <ul className="properties__list">
        {properties}
      </ul>
    );
  }
}

PropertyList.propTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
    attributes: React.PropTypes.shape({
      title: React.PropTypes.string.isRequired,
      url: React.PropTypes.string.isRequired,
    }),
  })),
  deleteProperty: React.PropTypes.func.isRequired,
};

export default PropertyList;
