import React, { Component } from 'react';

class PropertyEditForm extends Component {

  onCancelClick() {
    this.props.onCancelClick(false);
  }

  render() {
    return (
      <form className="properties__wrapper">
        <input type="text"
               value={this.props.title}
               className="properties__name" />
        <input type="url"
               value={this.props.url}
               className="properties__url" />
        <button type="submit">Okey Doke</button>
        <button type="button"
                onClick={this.onCancelClick.bind(this, false)}>Cancel</button>
      </form>
    );
  }
}

PropertyEditForm.propTypes = {
  title: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired,
  onCancelClick: React.PropTypes.func.isRequired,
};

export default PropertyEditForm;
