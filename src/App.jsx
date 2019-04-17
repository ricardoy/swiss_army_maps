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
            position: [-23.596299, -46.635222],
            positions: []
        }
    }

    updatePositions(e) {
        if (e.length > 0) {
            let newPosition = e.reduce((x, y) => [x[0]+y[0], x[1]+y[1]])            
            newPosition = [newPosition[0] / e.length, newPosition[1] / e.length]
            this.setState({
                position: newPosition
            })
        }
        
        this.setState(prevState => ({
            positions: [...prevState.positions, ...e],            
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
                        right: "5%",
                        top: "5%",
                        zIndex: 200
                        }}>
                        <MapForm updatePositions={this.updatePositions.bind(this)} cleanMarkers={this.cleanMarkers.bind(this)} />
                    </div>
                {/* </Draggable> */}
                
                <SimpleMap position={this.state.position} positions={this.state.positions} />
            </div>
        
    );
  }
}

export default App;
