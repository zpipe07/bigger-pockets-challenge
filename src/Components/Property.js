import React, { Component } from 'react';

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

  toggleIsEditing(isEditing) {
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
          <form className="properties__wrapper">
            <input type="text"
                   value={this.props.title}
                   className="properties__name" />
            <input type="url"
                   value={this.props.url}
                   className="properties__url" />
            <button type="submit">Okey Doke</button>
            <button type="button"
                    onClick={this.toggleIsEditing.bind(this, false)}>Cancel</button>
          </form>
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
