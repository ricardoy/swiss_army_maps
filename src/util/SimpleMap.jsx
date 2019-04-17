// @flow
import React, { Component } from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import Button from 'react-bootstrap/Button';

class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static defaultProps = {
    position: [-23.596299, -46.635222],
    positions: []
  };

  render() {
    const markers = this.props.positions.map((p) => 
                <Marker position={p} key={p.toString()}>                  
                  <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
                </Marker>
              )

    return (        
        <Map center={this.props.position} zoom={13} style={{zIndex: 100}}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                style={{zIndex: -1}}
            />
            {markers}            
        </Map>
    );
  }
}

export default SimpleMap;
