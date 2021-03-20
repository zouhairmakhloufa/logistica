import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./mapInformation.scss";
import DraggableMarker from "./DraggableMarker";
import { useState } from "react";
import { Popconfirm, Button } from "antd";

function MapInformation() {
  const [source, setSource] = useState({
    lat: 35.5030347,
    lng: 11.055748099999999,
    showMarker: false,
  });
  const [destination, setDestination] = useState({
    lat: 35.5030347,
    lng: 10.055748099999999,
    showMarker: false,
  });

  const confirm = () => {
    setSource({
      ...source,
      showMarker: true,
    });
  };

  const chooseAdressDestination = () => {
    setDestination({
      lat: 35.5030347,
      lng: 10.055748099999999,
      showMarker: true,
    });
  };

  let buttonAdressSource;
  if (source.showMarker) {
    buttonAdressSource = <DraggableMarker position={source} />;
  }
  let buttonAdressDestination;
  if (destination.showMarker) {
    buttonAdressDestination = <DraggableMarker position={destination} />;
  }
  return (
    <div className="contentImage">
      <MapContainer center={source} zoom={5} style={{ height: "100vh" }}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {buttonAdressSource}
        {buttonAdressDestination}
      </MapContainer>

      <div className="auth">
        <h1>Pick me up From </h1>

        <Popconfirm
          placement="top"
          title={"choose your adress Source"}
          onConfirm={confirm}
        >
          <Button
            type="primary"
            style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
          >
            {" "}
            choose your adress Source{" "}
          </Button>
        </Popconfirm>

        <br></br>
        <br></br>
        <br></br>
        <Popconfirm
          placement="top"
          title={"choose your adress destination"}
          onConfirm={chooseAdressDestination}
        >
          <Button
            type="primary"
            style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
          >
            {" "}
            choose your adress Source{" "}
          </Button>
        </Popconfirm>

        <br></br>
      </div>
    </div>
  );
}
export default MapInformation;