// @flow
import React, { Component } from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import Button from 'react-bootstrap/Button';

class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rawtext: ''
    };
  }

  static defaultProps = {
    position: [-23.596299, -46.635222],
    positions: []
  };

  render() {    
    const markers = this.props.positions.map((p) => 
                <Marker position={[p.latitude, p.longitude]} key={p.toString()}>                  
                  <Popup>{p.comment}</Popup>
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
