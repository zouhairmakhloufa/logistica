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
    { source: "Mahdia", destination: "Tozeur", distance: 290 },
    { source: "Mahdia", destination: "Béja", distance: 163 },
    { source: "Mahdia", destination: "Bizerte", distance: 276 },
    { source: "Mahdia", destination: "Ben Arous", distance: 200 },
    { source: "Mahdia", destination: "Gabès", distance: 264 },
    { source: "Mahdia", destination: "Gafsa", distance: 325 },
    { source: "Mahdia", destination: "Jendouba", distance: 360 },
    { source: "Mahdia", destination: "Kairouan", distance: 101 },
    { source: "Mahdia", destination: "Kébili", distance: 362 },
    { source: "Mahdia", destination: "Béja", distance: 314 },
    { source: "Mahdia", destination: "Kef", distance: 275 },
    { source: "Mahdia", destination: "Manouba", distance: 217 },
    { source: "Mahdia", destination: "Médenine", distance: 337 },
    { source: "Mahdia", destination: "Sidi Bouzid", distance: 190 },
    { source: "Mahdia", destination: "Siliana", distance: 204 },
    { source: "Mahdia", destination: "Tataouine", distance: 391 },

    { source: "Sfax", destination: "Sousse", distance: 132 },
    { source: "Sfax", destination: "Monastir", distance: 134 },
    { source: "Sfax", destination: "Tunis", distance: 271 },
    { source: "Sfax", destination: "Nabeul", distance: 259 },
    { source: "Sfax", destination: "Ariana", distance: 278 },
    { source: "Sfax", destination: "Zaghouan", distance: 261 },
    { source: "Sfax", destination: "Kef", distance: 291 },
    { source: "Sfax", destination: "Ben Arous", distance: 280 },
    { source: "Sfax", destination: "Gabès", distance: 161 },
    { source: "Sfax", destination: "Gafsa", distance: 200 },
    { source: "Sfax", destination: "Jendouba", distance: 418 },
    { source: "Sfax", destination: "Kairouan", distance: 135 },
    { source: "Sfax", destination: "Kébili", distance: 259 },
    { source: "Sfax", destination: "Béja", distance: 374 },
    { source: "Sfax", destination: "Bizerte", distance: 336 },
    { source: "Sfax", destination: "Manouba", distance: 277 },
    { source: "Sfax", destination: "Médenine", distance: 234 },
    { source: "Sfax", destination: "Sidi Bouzid", distance: 135 },
    { source: "Sfax", destination: "Siliana", distance: 235 },
    { source: "Sfax", destination: "Tataouine", distance: 288 },
    { source: "Sfax", destination: "Tozeur", distance: 293 },

    { source: "Tunis", destination: "Sousse", distance: 147 },
    { source: "Tunis", destination: "Nabeul", distance: 68 },
    { source: "Tunis", destination: "Zaghouan", distance: 56 },
    { source: "Tunis", destination: "Tozeur", distance: 454 },
    { source: "Tunis", destination: "Monastir", distance: 168 },
    { source: "Tunis", destination: "Ariana", distance: 13 },
    { source: "Tunis", destination: "Ben Arous", distance: 11 },
    { source: "Tunis", destination: "Bizerte", distance: 70 },
    { source: "Tunis", destination: "Gabès", distance: 414 },
    { source: "Tunis", destination: "Gafsa", distance: 362 },
    { source: "Tunis", destination: "Jendouba", distance: 155 },
    { source: "Tunis", destination: "Kairouan", distance: 161 },
    { source: "Tunis", destination: "Kébili", distance: 513 },
    { source: "Tunis", destination: "Béja", distance: 111 },
    { source: "Tunis", destination: "Kef", distance: 167 },
    { source: "Tunis", destination: "Manouba", distance: 10 },
    { source: "Tunis", destination: "Médenine", distance: 488 },

    { source: "Sousse", destination: "Monastir", distance: 21 },
    { source: "Sousse", destination: "Nabeul", distance: 108 },
    { source: "Sousse", destination: "Ariana", distance: 158 }, 
    { source: "Sousse", destination: "Zaghouan", distance: 102 },
    { source: "Sousse", destination: "Kef", distance: 253 },
    { source: "Sousse", destination: "Sidi Bouzid", distance: 175 },
    { source: "Sousse", destination: "Kébili", distance: 380 },
    { source: "Sousse", destination: "Ben Arous", distance: 161 },
    { source: "Sousse", destination: "Kébili", distance: 380 },
    { source: "Sousse", destination: "Bizerte", distance: 256 },
    { source: "Sousse", destination: "Gabès", distance: 282 },
    { source: "Sousse", destination: "Gafsa", distance: 274 },
    { source: "Sousse", destination: "Jendouba", distance: 320 },
    { source: "Sousse", destination: "Kairouan", distance: 68 },
    { source: "Sousse", destination: "Kébili", distance: 421 },
    { source: "Sousse", destination: "Béja", distance: 200 },
    { source: "Sousse", destination: "Kef", distance: 198 },
    { source: "Sousse", destination: "Manouba", distance: 170 },
    { source: "Sousse", destination: "Médenine", distance: 356 },
    
    { source: "Kasserine", destination: "Ariana", distance: 259 },
    { source: "Kasserine", destination: "Bizerte", distance: 367 },
    { source: "Kasserine", destination: "Gabès", distance: 273 },
    { source: "Kasserine", destination: "Gafsa", distance: 110 },
    { source: "Kasserine", destination: "Jendouba", distance: 184 },
    { source: "Kasserine", destination: "Kairouan", distance: 137 },
    { source: "Kasserine", destination: "Kébili", distance: 222 },
    { source: "Kasserine", destination: "Béja", distance: 231 },
    { source: "Kasserine", destination: "Kef", distance: 129 },
    { source: "Kasserine", destination: "Manouba", distance: 269 },
    { source: "Kasserine", destination: "Médenine", distance: 346 },

    { source: "Monastir", destination: "Kef", distance: 253 },
    { source: "Monastir", destination: "Sidi Bouzid", distance: 175 },
    { source: "Monastir", destination: "Kébili", distance: 380 },
    { source: "Monastir", destination: "Ben Arous", distance: 161 },
    { source: "Monastir", destination: "Kébili", distance: 380 },
    { source: "Monastir", destination: "Ariana", distance: 180 },
    { source: "Monastir", destination: "Nabeul", distance: 129 },
    { source: "Monastir", destination: "Bizerte", distance: 256 },
    { source: "Monastir", destination: "Gabès", distance: 282 },
    { source: "Monastir", destination: "Gafsa", distance: 274 },
    { source: "Monastir", destination: "Jendouba", distance: 320 },
    { source: "Monastir", destination: "Kairouan", distance: 68 },
    { source: "Monastir", destination: "Kébili", distance: 421 },
    { source: "Monastir", destination: "Béja", distance: 200 },
    { source: "Monastir", destination: "Kef", distance: 198 },
    { source: "Monastir", destination: "Manouba", distance: 170 },
    { source: "Monastir", destination: "Médenine", distance: 356 },


    { source: "Nabeul", destination: "Ariana", distance: 79 },
    { source: "Nabeul", destination: "Zaghouan", distance: 64 },
    { source: "Nabeul", destination: "Kef", distance: 231 },
    { source: "Nabeul", destination: "Ben Arous", distance: 60 },
    { source: "Nabeul", destination: "Gabès", distance: 376 },
    { source: "Nabeul", destination: "Gafsa", distance: 324 },
    { source: "Nabeul", destination: "Jendouba", distance: 219 },
    { source: "Nabeul", destination: "Kairouan", distance: 122 },
    { source: "Nabeul", destination: "Kébili", distance: 475 },
    { source: "Nabeul", destination: "Béja", distance: 174 },
    { source: "Nabeul", destination: "Bizerte", distance: 155 },
    { source: "Nabeul", destination: "Manouba", distance: 77 },
    { source: "Nabeul", destination: "Médenine", distance: 450 },
    { source: "Nabeul", destination: "Sidi Bouzid", distance: 234 },
    { source: "Nabeul", destination: "Siliana", distance: 181 },
    { source: "Nabeul", destination: "Tataouine", distance: 503 },
    { source: "Nabeul", destination: "Tozeur", distance: 415 },
    { source: "Ariana", destination: "Béja", distance: 174 },
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
