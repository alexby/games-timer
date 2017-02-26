import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      page: 'menu_main',
      background: 'white',
    };
  }

  setBackground = (color) => {
    this.setState({
      page: this.state.page,
      background: color,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro" style={{background: this.state.background}}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
