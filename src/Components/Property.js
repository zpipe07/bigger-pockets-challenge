import React, { Component } from 'react';

class Property extends Component {

  constructor() {
    super();
    this.state = {
      isEditing: false,
    }
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
      <li className="property">
        {
          this.state.isEditing
          ?
          <form>
            <input type="text"
                   value={this.props.title} />
            <input type="url"
                   value={this.props.url} />
            <button type="submit">Okey Doke</button>
            <button type="button"
                    onClick={this.toggleIsEditing.bind(this, false)}>Cancel</button>
          </form>
          :
          <div>
            <h3>{this.props.title}</h3>
            <h4>{this.props.url}</h4>
            <button onClick={this.toggleIsEditing.bind(this, true)}>Edit</button>
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
