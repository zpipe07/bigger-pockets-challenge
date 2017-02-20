import React, { Component } from 'react';
import utils from '../utilities/utils';

import Property from './Property';

import './PropertyList.css';

class PropertyList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      properties: undefined,
    }
  }

  addProperty(property) {
    let properties = this.state.properties;
    properties.push(property);
    this.setState({
      properties,
    });
  }

  removeProperty(id) {
    const properties = this.state.properties.filter((property) => {
      return property.id !== id;
    });
    this.setState({
      properties,
    });
  }

  deleteProperty(id) {
    this.props.deleteProperty(id);
  }

  onEditSubmit = (id, title, url) => {
    this.props.onEditSubmit(id, title, url);
  }

  updateProperty(property) {
    const properties = this.state.properties;
    const index = utils.findWithAttr(properties, 'id', property.id);
    properties[index] = property;
    this.setState({
      properties,
    });
  }

  render() {
    let properties;
    if (this.state.properties) {
      properties = this.state.properties.map((property) => {
        return (
          <Property title={property.attributes.title}
                    url={property.attributes.url}
                    id={property.id}
                    key={property.id}
                    onDelete={this.deleteProperty.bind(this)}
                    onEditSubmit={this.onEditSubmit} />
        );
      });
    }

    return (
      <ul className="properties__list">

        {properties ? properties : <p>No properties...</p>}

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
  onEditSubmit: React.PropTypes.func.isRequired,
};

export default PropertyList;
