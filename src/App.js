import React, { Component } from 'react';
import axios from 'axios';

import AddPropertyForm from './Components/AddPropertyForm';
import PropertyList from './Components/PropertyList';

import './App.css';

const baseURL = 'http://clientside-api.herokuapp.com'
const authKey = 'd0aed402a00bd1c7188373ba8dd20aab';

const instance = axios.create({
  baseURL: baseURL,
  headers: { Authorization: authKey }
});

class App extends Component {
  componentDidMount() {
    instance.get('/api/v1/listings')
      .then((response) => {
        // this.setState({});
      })
      .catch((error) => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    return (
      <div className="app">
        <h1 className="app__title">Listings</h1>
        <AddPropertyForm />
        <PropertyList />
      </div>
    );
  }
}

export default App;

// App
//  AddPropertyForm
//  PropertyList
//    Property
