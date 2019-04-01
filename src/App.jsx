import React, { Component } from 'react';
import SimpleMap from './map/SimpleMap'
import './App.css'

class App extends Component {
  render() {
    return (      
      <div className="full">
        <SimpleMap/>      
      </div>
    );
  }
}

export default App;
