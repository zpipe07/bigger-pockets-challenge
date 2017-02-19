import React, { Component } from 'react';

class Property extends Component {
  onDelete() {
    this.props.onDelete(this.props.id);
  }

  render() {
    return (
      <li className="property">
        <h3>{this.props.title}</h3>
        <h4>{this.props.url}</h4>
        <button onClick={this.onDelete.bind(this)}>Delete</button>
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
