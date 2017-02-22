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

  /**
   * onTitleChange event handler
   * @param  {event} evt
   */
  onTitleChange = (evt) => {
    this.setState({
      title: evt.target.value,
    });
  }

  /**
   * onUrlChange event handler
   * @param  {event} evt
   */
  onUrlChange = (evt) => {
    this.setState({
      url: evt.target.value,
    });
  }

  /**
   * onCancelClick event handler
   * @return {[type]} [description]
   */
  onCancelClick(evt) {
    evt.preventDefault();
    this.props.onCancelClick(false);
  }

  /**
   * onEditSubmit event handler
   * @param  {event} evt
   */
  onEditSubmit(evt) {
    evt.preventDefault();
    const title = this.state.title.trim();
    const url = this.state.url.trim();

    if (title && url) {
      this.setState({
        isLoading: true,
      });
      this.props.onEditSubmit(title, url);
    }
  }

  /**
   * onSuccessPropertyUpdate event handler. called from parent
   */
  onSuccessPropertyUpdate() {
    this.setState({
      isLoading: false,
    });
  }

  render() {
    return (
      <form onSubmit={this.onEditSubmit.bind(this)}
            className="properties__wrapper">

        <label className="screen-reader"
               htmlFor="nameEdit">Name</label>

        <input type="text"
               onChange={this.onTitleChange.bind(this)}
               value={this.state.title}
               ref={(input) => this.titleInput = input}
               className="properties__input properties__title"
               disabled={this.state.isLoading}
               id="nameEdit"
               required />

        <label className="screen-reader"
               htmlFor="urlEdit">URL</label>

        <input type="text"
               onChange={this.onUrlChange.bind(this)}
               value={this.state.url}
               ref={(input) => this.urlInput = input}
               className="properties__input properties__url"
               disabled={this.state.isLoading}
               id="urlEdit"
               required />

        <div className="properties__button-wrapper">

          <button type="submit"
                  className="properties__button"
                  disabled={this.state.isLoading}>
            <i className="fa fa-check properties__icon" aria-hidden="true"></i>
            <span className="screen-reader">Submit</span>
          </button>

          <button type="button"
                  onClick={this.onCancelClick.bind(this, false)}
                  className="properties__button properties__button--secondary"
                  disabled={this.state.isLoading}>
            <i className="fa fa-times properties__icon" aria-hidden="true"></i>
            <span className="screen-reader">Cancel</span>
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
