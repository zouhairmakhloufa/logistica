import { useEffect } from "react";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./mapInformation.scss";
import DraggableMarker from "./DraggableMarker";
import { useState, useContext } from "react";
import { Popconfirm, Button, Input, Select, Form } from "antd";
import { useHistory } from "react-router-dom";
import { LeftSquareOutlined, MenuOutlined } from "@ant-design/icons";
import BookinContext from "../../../context/booking";

const { Option } = Select;

function MapInformation() {
  const history = useHistory();
  const {
    setGovernorateAddressSource,
    setAddresSource,
    setGovernorateAddressDestination,
    setAddressDestination,
    setDistance,
    distance,
    governorateAddressSource,
    addresSource,
    governorateAddressDestination,
    addressDestination,
  }: any = useContext(BookinContext);
  console.log("governorate Address Source :", governorateAddressSource);
  console.log("addres Source : ", addresSource);
  console.log(
    "governorate Address destinataire : ",
    governorateAddressDestination
  );
  console.log("addres destinataire : ", addressDestination);

  const onSubmit = async (event: any) => {
    history.push("/PoidsAndTaille");
  };

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
    setDestination({
      ...destination,
      showMarker: true,
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

  const distances = [
    { source: "Mahdia", destination: "Tunis", distance: 300 },
    { source: "Mahdia", destination: "Sousse", distance: 50 },
    { source: "Mahdia", destination: "Monastir", distance: 48 },
    { source: "Mahdia", destination: "Sfax", distance: 127 },
    { source: "Sfax", destination: "Sousse", distance: 132 }, 
    { source: "Sfax", destination: "Tunis", distance: 271 }, 
    { source: "Sfax", destination: "Nabeul", distance: 271 }, 

  ];

  const selectedDistance = distances.find(
    (item) =>
      (item.source === governorateAddressSource &&
        item.destination === governorateAddressDestination) ||
      (item.source === governorateAddressDestination &&
        item.destination === governorateAddressSource)
  );
  console.log("distance", selectedDistance);

  return (
    <div className="contentImage">
      <MapContainer
        center={source}
        zoom={7}
        style={{ height: "105vh" }}
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

      <div className="Auth-Signup-Info">
        <LeftSquareOutlined
          onClick={() => history.push("/")}
          className="ClickRetourMenu"
        />
        <MenuOutlined
          onClick={() => history.push("/MenuUser")}
          className="troisLigneMenuMap"
        />
        <h1>Pick me up From </h1>
        <h1>selected distance: {selectedDistance?.distance} km </h1>

        <Popconfirm
          title={"Choose your source address by clicking on the map"}
          onConfirm={chooseAdressSource}
        >
          <Button
            className="buttonMapInfo"
            type="primary"
            style={{ background: "#79BAEC", borderColor: "#79BAEC	" }}
          >
            {" "}
            Choose Your Adress Source{" "}
          </Button>
        </Popconfirm>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onSubmit}
        >
          <h3> Choose Your Governorate </h3>
          <Select
            defaultValue="Bizerte"
            onChange={setGovernorateAddressSource}
            style={{ width: 120 }}
            bordered={false}
            className="select"
          >
            <Option value="Tunis">Tunis</Option>
            <Option value="Mahdia">Mahdia</Option>
            <Option value="Ariana"> Ariana</Option>
            <Option value="Béja">Béja</Option>
            <Option value="Ben Arous">Ben Arous</Option>
            <Option value="Bizerte">Bizerte</Option>
            <Option value="Gabès">Gabès</Option>
            <Option value="Gafsa"> Gafsa</Option>
            <Option value="Jendouba">Jendouba</Option>
            <Option value="Kairouan">Kairouan</Option>
            <Option value="Kasserine"> Kasserine</Option>
            <Option value="Kébili">Kébili</Option>
            <Option value="Kef">Kef</Option>
            <Option value="Manouba">Manouba</Option>
            <Option value="Médenine">Médenine</Option>
            <Option value="Monastir">Monastir</Option>
            <Option value="Nabeul">Nabeul</Option>
            <Option value="Sfax">Sfax</Option>
            <Option value="Sidi Bouzid">Sidi Bouzid</Option>
            <Option value="Siliana">Siliana</Option>
            <Option value="Sousse">Sousse</Option>
            <Option value="Tataouine">Tataouine</Option>
            <Option value="Tozeur">Tozeur</Option>
            <Option value="Zaghouan">Zaghouan</Option>
          </Select>
          <br></br>
          <br></br>
          <h3> Enter Your Accreditation and Adress </h3>
          <Input
            placeholder="Rue de la Corniche, Hammamet"
            onChange={(event) => setAddresSource(event.target.value)}
          />
          <Popconfirm
            title={"Choose your destination address by clicking on the map "}
            onConfirm={chooseAdressDestination}
          >
            <Button
              className="buttonMapInfo"
              type="primary"
              style={{ background: "#79BAEC", borderColor: "#79BAEC" }}
            >
              {" "}
              Choose Your Adress Destination{" "}
            </Button>
          </Popconfirm>
          <br></br> <br></br>
          <h3> Choose Your Governorate </h3>
          <Select
            defaultValue="Ariana"
            style={{ width: 120 }}
            bordered={false}
            className="select"
            onChange={setGovernorateAddressDestination}
          >
            <Option value="Tunis">Tunis</Option>
            <Option value="Mahdia">Mahdia</Option>
            <Option value="Ariana"> Ariana</Option>
            <Option value="Béja">Béja</Option>
            <Option value="Ben Arous">Ben Arous</Option>
            <Option value="Bizerte">Bizerte</Option>
            <Option value="Gabès">Gabès</Option>
            <Option value="Gafsa"> Gafsa</Option>
            <Option value="Jendouba">Jendouba</Option>
            <Option value="Kairouan">Kairouan</Option>
            <Option value="Kasserine"> Kasserine</Option>
            <Option value="Kébili">Kébili</Option>
            <Option value="Kef">Kef</Option>
            <Option value="Manouba">Manouba</Option>
            <Option value="Médenine">Médenine</Option>
            <Option value="Monastir">Monastir</Option>
            <Option value="Nabeul">Nabeul</Option>
            <Option value="Sfax">Sfax</Option>
            <Option value="Sidi Bouzid">Sidi Bouzid</Option>
            <Option value="Siliana">Siliana</Option>
            <Option value="Sousse">Sousse</Option>
            <Option value="Tataouine">Tataouine</Option>
            <Option value="Tozeur">Tozeur</Option>
            <Option value="Zaghouan">Zaghouan</Option>
          </Select>
          <br></br>
          <br></br>
          <h3> Enter Your Accreditation and Adress </h3>
          <Input
            placeholder="Rue de la Corniche, Hammamet"
            onChange={(event) => setAddressDestination(event.target.value)}
          />
          <Button
            className="buttonRoute"
            type="primary"
            htmlType="submit"
            style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
            onClick={() => {
              setIsClicked(true);
            }}
          >
            {" "}
            Route
          </Button>
          <br></br>
          <Button
            className="buttonNext"
            type="primary"
            style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
            onClick={() => {
              setDistance(selectedDistance?.distance);
              console.log("disctance", distance);
              history.push("/PoidsAndTaille");
            }}
          >
            Next
          </Button>
        </Form>
      </div>
    </div>
  );
}
export default MapInformation;
