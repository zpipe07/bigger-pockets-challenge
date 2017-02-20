import React, { Component } from 'react';

class PropertyContent extends Component {

  componentDidMount() {
    this.editButton.focus();
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

        <h3 className="properties__name">{this.props.title}</h3>

        <h4 className="properties__url">{this.props.url}</h4>

        <button onClick={this.toggleIsEditing.bind(this, true)}
                ref={(input) => this.editButton = input}>Edit</button>

        <button onClick={this.onDelete.bind(this)}>Delete</button>

      </div>
    );
  }
}

export default PropertyContent;
