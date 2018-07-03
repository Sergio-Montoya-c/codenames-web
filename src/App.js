import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout';
import SecretAgentsCard from './components/SecretAgentsCard';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="codenames-main-app">
          <Route exact path="/" component={Layout} />
          <Route exact path="/secret_agent_card" component={SecretAgentsCard} />
        </div>
      </Router>
    );
  }
}

export default App;
