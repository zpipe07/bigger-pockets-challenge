import React, { Component } from 'react';
import axios from 'axios';

import AddPropertyForm from './Components/AddPropertyForm/AddPropertyForm';
import PropertyList from './Components/PropertyList/PropertyList';

import './App.css';

const baseURL = 'http://clientside-api.herokuapp.com';
const authKey = 'd0aed402a00bd1c7188373ba8dd20aab';
const axiosInstance = axios.create({
  baseURL,
  headers: {
    Authorization: authKey,
    'Content-Type': 'application/json',
  },
});

/**
 * @class Main application
 */
class App extends Component {

  componentDidMount() {
    axiosInstance.get('/api/v1/listings')
      .then((response) => {
        this.refs.PropertyList.setState({
          properties: response.data.data,
        });
      })
      .catch((error) => {
        console.log('Error fetching and parsing data', error);
      });
  }

  /**
   * Make POST request to new property API
   * @param {string} title - property title
   * @param {string} url   - property URL
   */
  onNewPropertySubmit = (title, url) => {
    const jsonData = JSON.stringify(this.buildDataObject(title, url));

    axiosInstance.post('/api/v1/listings', jsonData)
      .then((response) => {
        this.refs.PropertyList.addProperty(response.data.data);
        this.refs.AddPropertyForm.onNewPropertySubmitSuccess();
      })
      .catch((error) => {
        console.log('Error posting the data', error);
      });
  }

  /**
   * onDeleteProperty event handler
   * @param {string} id - property id
   */
  onDeleteProperty = (id) => {
    axiosInstance.delete(`/api/v1/listings/${id}`)
      .then((response) => {
        this.refs.PropertyList.removeProperty(id);
      })
      .catch((error) => {
        console.log('Error deleting property', error);
      });
  }

  /**
   * onEditSubmit event handler
   * @param  {string} id    - property id
   * @param  {string} title - property title
   * @param  {string} url   - property url
   */
  onEditSubmit = (id, title, url) => {
    const jsonData = JSON.stringify(this.buildDataObject(title, url));

    axiosInstance.put(`/api/v1/listings/${id}`, jsonData)
      .then((response) => {
        this.refs.PropertyList.updateProperty(response.data.data);
      })
      .catch((error) => {
        console.log('Error updating the property', error);
      });
  }

  /**
   * Build the data object for PUT and POST requests
   * @param  {string} title - property title
   * @param  {string} url   - property url
   * @return {object}       - data object
   */
  buildDataObject(title, url) {
    return {
      data: {
        attributes: {
          title,
          url,
        },
      },
    };
  }

  render() {
    return (
      <div className="app">

        <h1 className="app__title">Listings</h1>

        <AddPropertyForm onNewPropertySubmit={this.onNewPropertySubmit}
                         ref="AddPropertyForm" />

        <PropertyList onDeleteProperty={this.onDeleteProperty}
                      onEditSubmit={this.onEditSubmit}
                      ref="PropertyList" />

      </div>
    );
  }
}

export default App;
