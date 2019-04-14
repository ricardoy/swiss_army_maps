// @flow
import React, { Component } from 'react';
import SimpleMap from './util/SimpleMap'
import MapForm from './util/MapForm'
import Button from 'react-bootstrap/Button';
import Draggable from 'react-draggable';

import './App.css'
import { relative } from 'path';

class App extends Component {
    render() {
        return (
            
            <div className="full">
                <Draggable>
                    <div style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        zIndex: 200
                    }}>
                        <MapForm />
                    </div>
                </Draggable>
                
                <SimpleMap/>
            </div>
        
    );
  }
}

export default App;
