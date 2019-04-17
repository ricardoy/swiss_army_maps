// @flow
import React, { Component } from 'react';
import SimpleMap from './util/SimpleMap'
import MapForm from './util/MapForm'
import Button from 'react-bootstrap/Button';
import Draggable from 'react-draggable';

import './App.css'
import { relative } from 'path';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            positions: []
        }
    }

    updatePosition(e) {
        this.setState(prevState => ({
            positions: [...prevState.positions, ...e]
          }))
    }

    cleanMarkers() {
        this.setState({positions: []})
    }

    render() {
        return (
            
            <div className="full">
                {/* <Draggable> */}
                    <div id="mapForm"  style={{
                        position: "absolute",
                        top: "10%",
                        right: "10%",
                        zIndex: 200
                        }}>
                        <MapForm updatePosition={this.updatePosition.bind(this)} cleanMarkers={this.cleanMarkers.bind(this)} />
                    </div>
                {/* </Draggable> */}
                
                <SimpleMap positions={this.state.positions} />
            </div>
        
    );
  }
}

export default App;
