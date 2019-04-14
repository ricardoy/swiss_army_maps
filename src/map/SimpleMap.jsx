import React, { Component } from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

class SimpleMap extends Component {
  static defaultProps = {
    position: [-23.596299, -46.635222]
  };

  render() {
    return (        
        <Map center={this.props.position} zoom={13}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <Marker position={this.props.position}>
                <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
            </Marker>
        </Map>
    );
  }
}

export default SimpleMap;
