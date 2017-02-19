import React, { Component } from 'react';

/**
 * @class A form for adding a new property
 */
class AddPropertyForm extends Component {
  /**
   * Form submit handler
   * @param  {event} evt
   */
  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.onSubmit(this.name.value, this.url.value);
  }

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text"
               onChange={this.onNameChange}
               ref={(input) => this.name = input}
               id="name"
               className="form__input" />

        <label htmlFor="url">URL</label>
        <input type="url"
               onChange={this.onUrlChange}
               ref={(input) => this.url = input}
               id="url"
               className="form__input" />

        <button type="submit">Enter</button>
      </form>
    );
  }
}

export default AddPropertyForm;
