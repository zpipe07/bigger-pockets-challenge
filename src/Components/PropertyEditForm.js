import React, { Component } from 'react';

class PropertyEditForm extends Component {

  state = {
    title: this.props.title,
    url: this.props.url,
  }

  onTitleChange = (evt) => {
    this.setState({
      title: evt.target.value,
      url: this.state.url,
    });
  }

  onUrlChange = (evt) => {
    this.setState({
      title: this.state.title,
      url: evt.target.value,
    });
  }

  onCancelClick() {
    this.props.onCancelClick(false);
  }

  onEditSubmit(evt) {
    evt.preventDefault();
    this.props.onEditSubmit(this.state.title, this.state.url);
  }

  render() {
    return (
      <form onSubmit={this.onEditSubmit.bind(this)}
            className="properties__wrapper">
        <input type="text"
               onChange={this.onTitleChange.bind(this)}
               value={this.state.title}
               ref={(input) => this.titleInput = input}
               className="properties__name" />
        <input type="text"
               onChange={this.onUrlChange.bind(this)}
               value={this.state.url}
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
