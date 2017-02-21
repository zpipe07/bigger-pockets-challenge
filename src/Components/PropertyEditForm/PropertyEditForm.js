import React, { Component } from 'react';

class PropertyEditForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      url: this.props.url,
    };
  }

  componentDidMount() {
    this.titleInput.focus();
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
               className="properties__input properties__title" />

        <input type="text"
               onChange={this.onUrlChange.bind(this)}
               value={this.state.url}
               ref={(input) => this.urlInput = input}
               className="properties__input properties__url" />

        <div className="properties__button-wrapper">

          <button type="submit"
                  className="properties__button">
            <i className="fa fa-check properties__icon" aria-hidden="true"></i>
          </button>

          <button type="button"
                  onClick={this.onCancelClick.bind(this, false)}
                  className="properties__button properties__button--secondary">
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
