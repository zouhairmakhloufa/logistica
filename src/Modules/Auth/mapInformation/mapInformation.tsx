import React from "react";
import {MapContainer,MapConsumer,TileLayer, useMapEvents} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./mapInformation.scss";
import {  Button, } from 'antd';

const icon = L.icon({
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: "https://unpkg.com/leaflet@1.7/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7/dist/images/marker-shadow.png"
  });
function mapInformation() {
  function MyComponent() {
    const map = useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        L.marker([lat, lng], { icon }).addTo(map);
      }
    });
    return null;
  }
  return (
    <div className="contentImage">

    <MapContainer
      center={[50.5, 30.5]}
      zoom={13}
      style={{ height: "100vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapConsumer>
        {(map) => {
          console.log("map center:", map.getCenter());
          map.once("click", function (e: any) {  
            const { lat, lng } = e.latlng;
            L.marker([lat, lng], { icon }).addTo(map);
          });
          return null;
        }}
      </MapConsumer>
    </MapContainer>
    <div className="auth">
        <h1>Pick me up From </h1>
        <Button className="button" type="primary" htmlType="submit" 
          style={{ background: "#66CDAA", borderColor: "#66CDAA" }}> set-pickup </Button>
        </div>
    </div>
  );
}
export default mapInformation;






