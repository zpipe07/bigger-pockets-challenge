import React, { Component } from 'react';

import PropertyEditForm from '../PropertyEditForm/PropertyEditForm';
import PropertyContent from '../PropertyContent/PropertyContent';

import './Property.css';

/**
 * @class A property/listing item
 */
class Property extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      isDeleted: false,
    };
  }

  /**
   * Toggle isEditing state
   * @param {Boolean} isEditing - true if editing
   */
  toggleIsEditing = (isEditing) => {
    this.setState({
      isEditing,
    });
  }

  /**
   * onEditSubmit event handler
   * @param  {string} title - property title
   * @param  {[type]} url   - property url
   */
  onEditSubmit = (title, url) => {
    this.props.onEditSubmit(
      this.props.id,
      title,
      url
    );
  }

  /**
   * onDeleteProperty event handler
   */
  onDeleteProperty() {
    this.props.onDeleteProperty(this.props.id);
  }

  /**
   * onSuccessPropertyUpdate event handler. called from parent
   */
  onSuccessPropertyUpdate() {
    this.propertyEditForm.onSuccessPropertyUpdate();
    this.setState({
      isEditing: false,
    });
  }

  render() {
    return (
      <li className={"properties__item " + (this.state.isDeleted ? "properties__item--deleted" : "")}>
        {
          this.state.isEditing
          ?
          <PropertyEditForm title={this.props.title}
                            url={this.props.url}
                            onCancelClick={this.toggleIsEditing}
                            onEditSubmit={this.onEditSubmit}
                            ref={(input) => this.propertyEditForm = input} />
          :
          <PropertyContent title={this.props.title}
                           url={this.props.url}
                           isNew={this.props.isNew}
                           toggleIsEditing={this.toggleIsEditing}
                           onDeleteProperty={this.onDeleteProperty.bind(this)} />
        }
      </li>
    );
  }
}

Property.propTypes = {
  title: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  isNew: React.PropTypes.bool,
  onDeleteProperty: React.PropTypes.func.isRequired,
  onEditSubmit: React.PropTypes.func.isRequired,
};

export default Property;
