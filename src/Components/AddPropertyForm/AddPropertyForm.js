import React, { Component } from 'react';

import './AddPropertyForm.css';

/**
 * @class A form for adding a new property
 */
class AddPropertyForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  /**
   * onNewPropertySubmit event handler
   * @param  {event} evt
   */
  onNewPropertySubmit = (evt) => {
    evt.preventDefault();
    const title = this.title.value.trim();
    const url = this.url.value.trim();

    if (title && url) {
      this.setState({
        isLoading: true,
      });
      this.props.onNewPropertySubmit(title, url);
    }
  }

  onNewPropertySubmitSuccess() {
    this.form.reset();
    this.setState({
      isLoading: false,
    });
  }

  render() {
    return (
      <form className="add-form"
            onSubmit={this.onNewPropertySubmit}
            ref={(input) => this.form = input}>

        <div className="add-form__input-wrapper">

          <input type="text"
                 ref={(input) => this.title = input}
                 id="title"
                 className="add-form__input"
                 disabled={this.state.isLoading}
                 required />

          <label htmlFor="title" className="add-form__label">Name</label>

        </div>

        <div className="add-form__input-wrapper">

          <input type="text"
                 ref={(input) => this.url = input}
                 id="url"
                 className="add-form__input"
                 disabled={this.state.isLoading}
                 required />

          <label htmlFor="url" className="add-form__label">URL</label>

        </div>

        <button type="submit"
                className="add-form__submit"
                disabled={this.state.isLoading}>Enter</button>

      </form>
    );
  }
}

AddPropertyForm.propTypes = {
  onNewPropertySubmit: React.PropTypes.func.isRequired,
};

export default AddPropertyForm;
