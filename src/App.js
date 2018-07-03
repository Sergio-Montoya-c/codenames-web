import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';

class App extends Component {
  render() {
    return (
      <div className="codenames-main-app">
        <h1>Codenames</h1>
        <Layout />
      </div>
    );
  }
}

export default App;
