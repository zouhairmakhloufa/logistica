import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./mapInformation.scss";
import { Button } from 'antd';
import DraggableMarker from "./DraggableMarker";
import getCurrentPosition from '../../../hooks/detectCurrentLocation';

function MapInformation() {
  const position = getCurrentPosition()
  
  return (
    <div className="contentImage">
      <MapContainer
        center={position}
        zoom={4}
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