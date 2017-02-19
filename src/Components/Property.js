import React, { Component } from 'react';

import PropertyEditForm from './PropertyEditForm';

import './Property.css';

class Property extends Component {

  constructor() {
    super();
    this.state = {
      isEditing: false,
    }
  }

  componentDidMount() {
    this.editButton.focus();
  }

  toggleIsEditing = (isEditing) => {
    this.setState({
      isEditing,
    });
  }

  onDelete() {
    this.props.onDelete(this.props.id);
  }

  render() {
    return (
      <li className="properties__item">
        {
          this.state.isEditing
          ?
          <PropertyEditForm title={this.props.title} url={this.props.url} onCancelClick={this.toggleIsEditing} />
          :
          <div className="properties__wrapper">
            <h3 className="properties__name">{this.props.title}</h3>
            <h4 className="properties__url">{this.props.url}</h4>
            <button onClick={this.toggleIsEditing.bind(this, true)}
                    ref={(input) => this.editButton = input}>Edit</button>
            <button onClick={this.onDelete.bind(this)}>Delete</button>
          </div>
        }
      </li>
    );
  }
}

Property.propTypes = {
  title: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired,
  onDelete: React.PropTypes.func.isRequired,
};

export default Property;
