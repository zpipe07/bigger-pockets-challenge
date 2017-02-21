import React, { Component } from 'react';

import './AddPropertyForm.css';

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
    evt.currentTarget.reset();
  }

  render() {
    return (
      <form className="add-form" onSubmit={this.onSubmit}>

        <div className="add-form__input-wrapper">

          <input type="text"
                 onChange={this.onNameChange}
                 ref={(input) => this.name = input}
                 id="name"
                 className="add-form__input" required />

          <label htmlFor="name" className="add-form__label">Name</label>

        </div>

        <div className="add-form__input-wrapper">

          <input type="text"
                 onChange={this.onUrlChange}
                 ref={(input) => this.url = input}
                 id="url"
                 className="add-form__input" required />

          <label htmlFor="url" className="add-form__label">URL</label>

        </div>

        <button type="submit" className="add-form__submit">Enter</button>

      </form>
    );
  }
}

AddPropertyForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
};

export default AddPropertyForm;
