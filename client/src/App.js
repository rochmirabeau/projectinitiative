import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Map extends Component {
  render() {
    return (
      <div>
        <h1>MAP</h1>
      </div>
    );
  }
};
class App extends Component {
  constructor(props){
    super(props);
    this.state = {showMap:false};
    this.click = this.click.bind(this);
  }
  click() {
    if(this.state.showMap){
      this.setState({showMap:false});
    } else {
      this.setState({showMap:true});
    }
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.click}>Click me to see our map!</button>
        <a href="http://localhost:3030/clickable">Maybe this link works...</a>
        { this.state.showMap ? <Map /> : null }
      </div>
    );
  }
};

export default App;
