import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./mapInformation.scss";
import DraggableMarker from "./DraggableMarker";
import { useState } from "react";
import { Popconfirm, Button } from "antd";
import { useHistory } from "react-router-dom";
import { LeftSquareOutlined } from "@ant-design/icons";

function MapInformation() {
  const history = useHistory();

  const [isClicked, setIsClicked] = useState(false);
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

  const chooseAdressSource = () => {
    setSource({ ...source, showMarker: true });
  };
  const chooseAdressDestination = () => {
    setDestination({ ...destination, showMarker: true,
    });
  };

  let buttonAdressSource;
  if (source.showMarker) {
    buttonAdressSource = (
      <DraggableMarker position={source} setPosition={setSource} />
    );
  }
  let buttonAdressDestination;
  if (destination.showMarker) {
    buttonAdressDestination = (
      <DraggableMarker position={destination} setPosition={setDestination} />
    );
  }

  return (
    <div className="contentImage">
      <MapContainer
        center={source}
        zoom={7}
        style={{ height: "100vh" }}
        className="imageAuth"
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {isClicked && (
          <Polyline positions={[source, destination]} color={"red"} />
        )}

        {buttonAdressSource}
        {buttonAdressDestination}
      </MapContainer>

      <div className="auth-signup-info">
        <LeftSquareOutlined
          onClick={() => history.push("/Auth/SignupUser")}
          className="ClickRetour"
        />

        <h1>Pick me up From </h1>
        <Popconfirm
          title={"Choose your source address by clicking on the map"}
          onConfirm={chooseAdressSource}
        >
          <Button
            className="buttonMap"
            type="primary"
            style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
          >
            {" "}
            Choose Your Adress Source{" "}
          </Button>
        </Popconfirm>
        <br></br>
        <br></br>
        <Popconfirm
          title={"Choose your destination address by clicking on the map "}
          onConfirm={chooseAdressDestination}
        >
          <Button
            className="buttonMap"
            type="primary"
            style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
          >
            {" "}
            Choose Your Adress Destination{" "}
          </Button>
        </Popconfirm>
        <br></br>
        <br></br>
        <Button
          className="buttonNext"
          type="primary"
          htmlType="submit"
          style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
          onClick={() => {
            isClicked ? history.push("/PoidsAndTaille") : setIsClicked(true);
          }}
        >
          Route
        </Button>
      </div>
    </div>
  );
}
export default MapInformation;
