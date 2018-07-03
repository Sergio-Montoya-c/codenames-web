import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Layout from './components/Layout';


class App extends Component {
  render() {
    return (
      <div className="codenames-main-app">
        <Header />
        <Layout />
      </div>
    );
  }
}

export default App;
