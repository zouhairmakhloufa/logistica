import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./mapInformation.scss";
import { Button } from 'antd';
import DraggableMarker from "./DraggableMarker";
import { useState } from "react";

function MapInformation() {
  const position = { lat: 35.5030347, lng: 11.055748099999999 };
  const [source, setSource] = useState({ lat: 35.5030347, lng: 11.055748099999999 })

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

        <DraggableMarker position={source} />

      </MapContainer>
      <div className="auth">
        <h1>Pick me up From </h1>
        <Button className="button" type="primary" htmlType="submit"
          style={{ background: "#66CDAA", borderColor: "#66CDAA" }}> choose your adress Source </Button>
        <br></br>
        <Button className="button" type="primary" htmlType="submit"
          style={{ background: "#66CDAA", borderColor: "#66CDAA" }}> choose your adress destination </Button>

        <br></br>
        <br></br>
        <Button className="buttonNext" type="primary" htmlType="submit"
          style={{ background: "#66CDAA", borderColor: "#66CDAA" }}> Next </Button>
      </div>
    </div>
  );
}
export default MapInformation;