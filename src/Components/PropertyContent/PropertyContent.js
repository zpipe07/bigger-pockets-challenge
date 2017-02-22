import React, { Component } from 'react';

/**
 * @class A property's static content
 */
class PropertyContent extends Component {

  componentDidMount() {
    if (this.props.isNew) {
      this.editButton.focus();
    }
  }

  /**
   * onDeleteProperty event handler
   */
  onDeleteProperty() {
    this.props.onDeleteProperty();
  }

  /**
   * toggleIsEditing event handler
   * @param {Boolean} isEditing - true if editing
   */
  toggleIsEditing(isEditing) {
    this.props.toggleIsEditing(isEditing);
  }

  render() {
    return (
      <div className="properties__wrapper">

        <h3 className="properties__text properties__title">{this.props.title}</h3>

        <h4 className="properties__text properties__url">{this.props.url}</h4>

        <div className="properties__button-wrapper">

          <button onClick={this.toggleIsEditing.bind(this, true)}
                  ref={(input) => this.editButton = input}
                  className="properties__button">
            <i className="fa fa-pencil properties__icon" aria-hidden="true"></i>
            <span className="screen-reader">Edit</span>
          </button>

          <button onClick={this.onDeleteProperty.bind(this)}
                  className="properties__button properties__button--secondary">
            <i className="fa fa-trash properties__icon"
               aria-hidden="true"></i>
            <span className="screen-reader">Delete</span>
          </button>

        </div>

      </div>
    );
  }
}

PropertyContent.propTypes = {
  title: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired,
  isNew: React.PropTypes.bool,
  toggleIsEditing: React.PropTypes.func.isRequired,
  onDeleteProperty: React.PropTypes.func.isRequired,
};

export default PropertyContent;
