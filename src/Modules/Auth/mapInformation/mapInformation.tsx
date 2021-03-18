import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./mapInformation.scss";
import { Button } from 'antd';
import DraggableMarker from "./DraggableMarker";
import { useState, useEffect } from 'react';


function MapInformation() {
  const [position, setPosition] = useState({lat: 35.5030347, lng: 11.055748099999999});
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      debugger
      setPosition({ 
        lat:  position.coords.latitude,
        lng: position.coords.longitude
      })
    });
  }, [])
  
  return (
    <div className="contentImage">
      <MapContainer
        center={position}
        zoom={5}
        style={{ height: "100vh" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          
        <DraggableMarker />

      </MapContainer>
      <div className="auth">
        <h1>Pick me up From </h1>
        <input placeholder="Search Places " style={{ width: "80%" }}  />
        <Button className="button" type="primary" htmlType="submit"
          style={{ background: "#66CDAA", borderColor: "#66CDAA" }}> set-pickup </Button>
      </div>
    </div>
  );
}
export default MapInformation;