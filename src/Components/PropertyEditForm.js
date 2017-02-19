import React, { Component } from 'react';

class PropertyEditForm extends Component {

  onCancelClick() {
    this.props.onCancelClick(false);
  }

  onEditSubmit(evt) {
    evt.preventDefault();
    this.props.onEditSubmit(this.titleInput.value, this.urlInput.value);
  }

  render() {
    return (
      <form onSubmit={this.onEditSubmit.bind(this)}
            className="properties__wrapper">
        <input type="text"
               value={this.props.title}
               ref={(input) => this.titleInput = input}
               className="properties__name" />
        <input type="text"
               value={this.props.url}
               ref={(input) => this.urlInput = input}
               className="properties__url" />
        <button type="submit">OK</button>
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
  onEditSubmit: React.PropTypes.func.isRequired,
};

export default PropertyEditForm;
