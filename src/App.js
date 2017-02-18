import React, { Component } from 'react';
import axios from 'axios';

import AddPropertyForm from './Components/AddPropertyForm';
import PropertyList from './Components/PropertyList';

import './App.css';

class App extends Component {
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
