import React, { Component, PropTypes } from 'react';
import logo from '../../logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{background: this.props.background}}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React</h2>
        </div>
        <h3>{this.props.title}</h3>
        <div className="App-intro">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  background: PropTypes.string,
  title: PropTypes.string,
};

App.defaultProps = {
  background: 'white',
  title: 'default',
};

export default App;
