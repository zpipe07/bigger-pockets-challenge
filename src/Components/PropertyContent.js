import React, { Component } from 'react';

class PropertyContent extends Component {

  componentDidMount() {
    if (this.props.isNew) {
      this.editButton.focus();
    }
  }

  onDelete() {
    this.props.onDelete();
  }

  toggleIsEditing(isEditing) {
    this.props.toggleIsEditing(isEditing);
  }

  render() {
    return (
      <div className="properties__wrapper">

        <h3 className="properties__text properties__title">{this.props.title}</h3>

        <h4 className="properties__text properties__url">{this.props.url}</h4>

        <button onClick={this.toggleIsEditing.bind(this, true)}
                ref={(input) => this.editButton = input}
                className="properties__button">Edit</button>

        <button onClick={this.onDelete.bind(this)}
                className="properties__button">Delete</button>

      </div>
    );
  }
}

export default PropertyContent;
