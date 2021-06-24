import { MapContainer, TileLayer } from "react-leaflet";
import { useContext, useState } from "react";
import { Button, Input, Select, Form } from "antd";
import { useHistory } from "react-router-dom";
import BookinContext from "../../../context/booking";
import "leaflet/dist/leaflet.css";
import "./mapInformation.scss";
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
  console.log("governorate Address destinataire : ", governorateAddressDestination);
  console.log("addres destinataire : ", addressDestination);

  const onSubmit = async (event: any) => {
    history.push("/PoidsAndTaille");
  };
  const [source, setSource] = useState({
    lat: 35.5030347,
    lng: 11.055748099999999,
    showMarker: false,
  });
  const distances = [
    { source: "Mahdia", destination: "Tunis", distance: 300 },
    { source: "Mahdia", destination: "Sousse", distance: 50 },
    { source: "Mahdia", destination: "Monastir", distance: 48 },
    { source: "Mahdia", destination: "Sfax", distance: 127 },
    { source: "Mahdia", destination: "Zaghouan", distance: 163 },
    { source: "Mahdia", destination: "Kef", distance: 163 },
    { source: "Mahdia", destination: "Nabeul", distance: 170 },
    { source: "Mahdia", destination: "Ariana", distance: 220 },
    { source: "Sfax", destination: "Sousse", distance: 132 },
    { source: "Sfax", destination: "Monastir", distance: 134 },
    { source: "Sfax", destination: "Tunis", distance: 271 },
    { source: "Sfax", destination: "Nabeul", distance: 259 },
    { source: "Sfax", destination: "Ariana", distance: 278 },
    { source: "Sfax", destination: "Zaghouan", distance: 261 },
    { source: "Sfax", destination: "Kef", distance: 291 },
    { source: "Tunis", destination: "Sousse", distance: 147 },
    { source: "Tunis", destination: "Nabeul", distance: 68 },
    { source: "Tunis", destination: "Zaghouan", distance: 56 },
    { source: "Tunis", destination: "Tozeur", distance: 454 },
    { source: "Tunis", destination: "Monastir", distance: 168 },
    { source: "Sousse", destination: "Monastir", distance: 21 },
    { source: "Sousse", destination: "Nabeul", distance: 108 },
    { source: "Sousse", destination: "Ariana", distance: 158 },
    { source: "Sousse", destination: "Zaghouan", distance: 102 },
    { source: "Kasserine", destination: "Ariana", distance: 259 },
    { source: "Kasserine", destination: "Monastir", distance: 232 },
    { source: "Kasserine", destination: "Sousse", distance: 196 },
    { source: "Kasserine", destination: "Tunis", distance: 298 },
    { source: "Kasserine", destination: "Sfax", distance: 199 },
    { source: "Kasserine", destination: "Mahdia", distance: 242 },
    { source: "Monastir", destination: "Kef", distance: 253 },
    { source: "Monastir", destination: "Sidi Bouzid", distance: 175 },
    { source: "Monastir", destination: "Kébili", distance: 380 },
    { source: "Monastir", destination: "Ben Arous", distance: 161 },
    { source: "Ariana", destination: "Béja", distance: 116 },
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
        className="map"
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>

      <div className="Auth-Signup-Info">
        <h2>Pick me up From </h2>
        <h2 className="text" >selected distance: {selectedDistance?.distance} km </h2>

        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onSubmit}
        >
          <h3> Choose Your Governorate </h3>
          <Select
            defaultValue="Nabeul"
            onChange={setGovernorateAddressSource}
            style={{ width: 120 }}
            bordered={false}
            className="select"
          >
            <Option value="Tunis">Tunis</Option>
            <Option value="Mahdia">Mahdia</Option>
            <Option value="Ariana"> Ariana</Option>
            <Option value="Monastir">Monastir</Option>
            <Option value="Nabeul">Nabeul</Option>
            <Option value="Sfax">Sfax</Option>
            <Option value="Sousse">Sousse</Option>
            <Option value="Kasserine"> Kasserine</Option>
            <Option value="Ben Arous">Ben Arous</Option>
            <Option value="Bizerte">Bizerte</Option>
            <Option value="Gabès">Gabès</Option>
            <Option value="Gafsa"> Gafsa</Option>
            <Option value="Jendouba">Jendouba</Option>
            <Option value="Kairouan">Kairouan</Option>
            <Option value="Kasserine"> Kasserine</Option>
            <Option value="Kébili">Kébili</Option>
            <Option value="Béja">Béja</Option>
            <Option value="Kef">Kef</Option>
            <Option value="Manouba">Manouba</Option>
            <Option value="Médenine">Médenine</Option>
            <Option value="Sidi Bouzid">Sidi Bouzid</Option>
            <Option value="Siliana">Siliana</Option>
            <Option value="Tataouine">Tataouine</Option>
            <Option value="Tozeur">Tozeur</Option>
            <Option value="Zaghouan">Zaghouan</Option>
          </Select>

          <h3> Enter Your Accreditation and Adress </h3>
          <Input
            placeholder="Rue de la Corniche, Hammamet"
            onChange={(event) => setAddresSource(event.target.value)}
          />

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
            <Option value="Monastir">Monastir</Option>
            <Option value="Nabeul">Nabeul</Option>
            <Option value="Sfax">Sfax</Option>
            <Option value="Sousse">Sousse</Option>
            <Option value="Kasserine"> Kasserine</Option>
            <Option value="Ben Arous">Ben Arous</Option>
            <Option value="Bizerte">Bizerte</Option>
            <Option value="Gabès">Gabès</Option>
            <Option value="Gafsa"> Gafsa</Option>
            <Option value="Jendouba">Jendouba</Option>
            <Option value="Kairouan">Kairouan</Option>
            <Option value="Kasserine"> Kasserine</Option>
            <Option value="Kébili">Kébili</Option>
            <Option value="Béja">Béja</Option>
            <Option value="Kef">Kef</Option>
            <Option value="Manouba">Manouba</Option>
            <Option value="Médenine">Médenine</Option>
            <Option value="Sidi Bouzid">Sidi Bouzid</Option>
            <Option value="Siliana">Siliana</Option>
            <Option value="Tataouine">Tataouine</Option>
            <Option value="Tozeur">Tozeur</Option>
            <Option value="Zaghouan">Zaghouan</Option>
          </Select>


          <h3> Enter Your Accreditation and Adress </h3>
          <Input
            placeholder="Rue de la Corniche, Hammamet"
            onChange={(event) => setAddressDestination(event.target.value)}
          />
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
