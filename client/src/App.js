import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  click() {
    alert("I wish I could show you our map");
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.click}>Click me to see our map!</button>
      </div>
    );
  }
}

export default App;
