import React, { Component } from 'react';

class PropertyEditForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      url: this.props.url,
      isLoading: false,
    };
  }

  componentDidMount() {
    this.titleInput.focus();
  }

  onTitleChange = (evt) => {
    this.setState({
      title: evt.target.value,
    });
  }

  onUrlChange = (evt) => {
    this.setState({
      url: evt.target.value,
    });
  }

  onCancelClick() {
    this.props.onCancelClick(false);
  }

  onEditSubmit(evt) {
    evt.preventDefault();
    this.setState({
      isLoading: true,
    });
    this.props.onEditSubmit(this.state.title, this.state.url);
  }

  onSuccessPropertyUpdate() {
    this.setState({
      isLoading: false,
    });
  }

  render() {
    return (
      <form onSubmit={this.onEditSubmit.bind(this)}
            className="properties__wrapper">

        <input type="text"
               onChange={this.onTitleChange.bind(this)}
               value={this.state.title}
               ref={(input) => this.titleInput = input}
               className="properties__input properties__title"
               disabled={this.state.isLoading} />

        <input type="text"
               onChange={this.onUrlChange.bind(this)}
               value={this.state.url}
               ref={(input) => this.urlInput = input}
               className="properties__input properties__url"
               disabled={this.state.isLoading} />

        <div className="properties__button-wrapper">

          <button type="submit"
                  className="properties__button"
                  disabled={this.state.isLoading}>
            <i className="fa fa-check properties__icon" aria-hidden="true"></i>
          </button>

          <button type="button"
                  onClick={this.onCancelClick.bind(this, false)}
                  className="properties__button properties__button--secondary"
                  disabled={this.state.isLoading}>
            <i className="fa fa-times properties__icon"
               aria-hidden="true"></i>
          </button>

        </div>

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
