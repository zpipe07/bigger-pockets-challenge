import React, { Component } from 'react';

import './AddPropertyForm.css';

/**
 * @class A form for adding a new property
 */
class AddPropertyForm extends Component {

  /**
   * onNewPropertySubmit event handler
   * @param  {event} evt
   */
  onNewPropertySubmit = (evt) => {
    evt.preventDefault();
    this.props.onNewPropertySubmit(this.title.value, this.url.value);
    evt.currentTarget.reset();
  }

  render() {
    return (
      <form className="add-form" onSubmit={this.onNewPropertySubmit}>

        <div className="add-form__input-wrapper">

          <input type="text"
                 ref={(input) => this.title = input}
                 id="title"
                 className="add-form__input" required />

          <label htmlFor="title" className="add-form__label">Name</label>

        </div>

        <div className="add-form__input-wrapper">

          <input type="text"
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
  onNewPropertySubmit: React.PropTypes.func.isRequired,
};

export default AddPropertyForm;
