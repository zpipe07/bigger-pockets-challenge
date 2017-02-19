import React, { Component } from 'react';
import axios from 'axios';

import AddPropertyForm from './Components/AddPropertyForm';
import PropertyList from './Components/PropertyList';

import './App.css';

const baseURL = 'http://clientside-api.herokuapp.com';
const authKey = 'd0aed402a00bd1c7188373ba8dd20aab';
const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: authKey,
    'Content-Type': 'application/json',
  }
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      properties: [],
    };
  }

  componentDidMount() {
    axiosInstance.get('/api/v1/listings')
      .then((response) => {
        this.setState({
          properties: response.data.data,
        });
      })
      .catch((error) => {
        console.log('Error fetching and parsing data', error);
      });
  }

  /**
   * Make POST request to new property API
   * @param {string} title - property name
   * @param {string} url   - property URL
   */
  postNewProperty = (title, url) => {
    const data = {
      data: {
        attributes: {
          title,
          url,
        },
      }
    };

    axiosInstance.post('/api/v1/listings', JSON.stringify(data))
      .then((response) => {
        let properties = this.state.properties;
        properties.push(response.data.data);

        this.setState({
          properties,
        });
      })
      .catch((error) => {
        console.log('Error posting the data', error);
      });
  }

  deleteProperty = (id) => {
    axiosInstance.delete(`/api/v1/listings/${id}`)
      .then((response) => {
        let properties = this.state.properties.filter((property) => {
          return property.id !== id;
        });
        this.setState({
          properties,
        });
      })
      .catch((error) => {
        console.log('Error deleting property', error);
      });
  }

  render() {
    return (
      <div className="app">
        <h1 className="app__title">Listings</h1>
        <AddPropertyForm onSubmit={this.postNewProperty} />
        <PropertyList data={this.state.properties}
                      deleteProperty={this.deleteProperty} />
      </div>
    );
  }
}

export default App;
