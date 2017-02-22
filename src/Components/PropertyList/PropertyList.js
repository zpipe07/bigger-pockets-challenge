import React, { Component } from 'react';
import utils from '../../utilities/utils';

import Property from '../Property/Property';
import LoadingProperties from '../LoadingProperties/LoadingProperties';
import EmptyProperties from '../EmptyProperties/EmptyProperties';

import './PropertyList.css';

/**
 * @class List of properties
 */
class PropertyList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      properties: undefined,
    }
  }

  /**
   * onDeleteProperty event handler
   * @param {string} id - property id
   */
  onDeleteProperty(id) {
    this.props.onDeleteProperty(id);
  }

  /**
   * onEditSubmit event handler
   * @param {string} id    - property id
   * @param {string} title - property title
   * @param {string} url   - property url
   */
  onEditSubmit = (id, title, url) => {
    this.props.onEditSubmit(id, title, url);
  }

  /**
   * Add a property to properties
   * @param {object} property - a property object
   */
  addProperty(property) {
    let properties = this.state.properties;

    properties.push(
      Object.assign(property, { isNew: true })
    );

    this.setState({
      properties,
    });
  }

  /**
   * Remove a property from properties
   * @param {string} id - property id
   */
  removeProperty(id) {
    this[id].setState({
      isDeleted: true,
    });

    // use setTimeout to allow CSS transition to complete
    setTimeout(() => {
      const properties = this.state.properties.filter((property) => {
        return property.id !== id;
      });

      this.setState({
        properties,
      });
    }, 200);
  }

  /**
   * Update a property in properties
   * @param {object} property - property object
   */
  updateProperty(property) {
    const properties = this.state.properties;
    const index = utils.findWithAttr(properties, 'id', property.id);

    this[property.id].onSuccessPropertyUpdate();
    properties[index] = property;

    this.setState({
      properties,
    });
  }

  render() {
    let properties;

    // this.state.properties is undefined until initial GET request resolves
    if (this.state.properties) {
      if (this.state.properties.length > 0) {
        properties = this.state.properties.map((property) => {
          return (
            <Property title={property.attributes.title}
                      url={property.attributes.url}
                      id={property.id}
                      key={property.id}
                      isNew={property.isNew}
                      onDeleteProperty={this.onDeleteProperty.bind(this)}
                      onEditSubmit={this.onEditSubmit}
                      ref={(input) => this[property.id] = input} />
          );
        });
      } else {
        properties = <EmptyProperties />
      }
    }

    return (
      <ul className="properties__list">

        {properties ? properties : <LoadingProperties />}

      </ul>
    );
  }
}

PropertyList.propTypes = {
  onDeleteProperty: React.PropTypes.func.isRequired,
  onEditSubmit: React.PropTypes.func.isRequired,
};

export default PropertyList;
