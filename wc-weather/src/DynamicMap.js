import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

class DynamicMap extends React.Component {
  render() {
    console.log(this.props.currentCity);
    const coordinates = {
      Tunis: { lat: 36.8189, lng: 10.16579 },
      Brussels: { lat: 50.8504, lng: 4.34878 },
      "Panama City": { lat: 8.9936, lng: -79.51973 },
      Moscow: { lat: 55.75222, lng: 37.61555 },
      London: { lat: 51.505, lng: -0.09 }
    };
    let position = [
      coordinates[this.props.currentCity].lat,
      coordinates[this.props.currentCity].lng
    ];
    return (
      <Map center={position} zoom={12}>
        <TileLayer
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <span>
              A pretty CSS3 popup. <br /> Easily customizable.
            </span>
          </Popup>
        </Marker>
      </Map>
    );
  }
}

export default DynamicMap;
