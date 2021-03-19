import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./mapInformation.scss";
import { Button } from "antd";
import DraggableMarker from "./DraggableMarker";
import { useEffect, useState } from "react";

function MapInformation() {
  const position: { lat: number; lng: number } = { lat: 0, lng: 0 };
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

  useEffect(() => {
    const geo = navigator.geolocation;
    geo.getCurrentPosition((pos) => {
      if (pos.coords.altitude && pos.coords.longitude) {
        position.lat = pos.coords.altitude;
        position.lng = pos.coords.longitude;
      }
    });
  }, [position]);

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

        <Button
          className="button"
          type="primary"
          htmlType="submit"
          style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
          onClick={(e) =>
            setSource({
              lat: 35.5030347,
              lng: 11.055748099999999,
              showMarker: true,
            })
          }
        >
          {" "}
          choose your adress Source{" "}
        </Button>

        <br></br>

        <Button
          className="button"
          type="primary"
          htmlType="submit"
          style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
          onClick={(e) =>
            setDestination({
              lat: 35.5030347,
              lng: 10.055748099999999,
              showMarker: true,
            })
          }
        >
          {" "}
          choose your adress destination{" "}
        </Button>

        <br></br>
        <br></br>

        <Button
          className="buttonNext"
          type="primary"
          htmlType="submit"
          style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
          onClick={(e) =>
            setDestination({
              lat: 35.5030347,
              lng: 10.055748099999999,
              showMarker: true,
            })
          }
        >
          {" "}
          Add{" "}
        </Button>
      </div>
    </div>
  );
}
export default MapInformation;
