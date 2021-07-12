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

    { source: "Ariana", destination: "Béja", distance: 116 },
    { source: "Ariana", destination: "Zaghouan", distance: 68 },
    { source: "Ariana", destination: "Kef", distance: 172 },
    { source: "Ariana", destination: "Ben Arous", distance: 22 },
    { source: "Ariana", destination: "Gabès", distance: 426 },
    { source: "Ariana", destination: "Gafsa", distance: 356 },
    { source: "Ariana", destination: "Jendouba", distance: 160 },
    { source: "Ariana", destination: "Kairouan", distance: 172 },
    { source: "Ariana", destination: "Kébili", distance: 525 },
    { source: "Ariana", destination: "Bizerte", distance: 64 },
    { source: "Ariana", destination: "Manouba", distance: 13 },
    { source: "Ariana", destination: "Médenine", distance: 500 },
    { source: "Ariana", destination: "Sidi Bouzid", distance: 284 },
    { source: "Ariana", destination: "Siliana", distance: 136 },
    { source: "Ariana", destination: "Tataouine", distance: 553 },
    { source: "Ariana", destination: "Tozeur", distance: 465 },

    { source: "Kairouan", destination: "Béja", distance: 186 },
    { source: "Kairouan", destination: "Zaghouan", distance: 105 },
    { source: "Kairouan", destination: "Kef", distance: 170 },
    { source: "Kairouan", destination: "Ben Arous", distance: 153 },
    { source: "Kairouan", destination: "Gabès", distance: 223 },
    { source: "Kairouan", destination: "Gafsa", distance: 202 },
    { source: "Kairouan", destination: "Jendouba", distance: 201 },
    { source: "Kairouan", destination: "Kébili", distance: 321 },
    { source: "Kairouan", destination: "Bizerte", distance: 230 },
    { source: "Kairouan", destination: "Manouba", distance: 171 },
    { source: "Kairouan", destination: "Médenine", distance: 296 },
    { source: "Kairouan", destination: "Sidi Bouzid", distance: 296 },
    { source: "Kairouan", destination: "Siliana", distance: 100 },
    { source: "Kairouan", destination: "Tataouine", distance: 350 },
    { source: "Kairouan", destination: "Tozeur", distance: 294 },

    { source: "Béja", destination: "Zaghouan", distance: 116 },
    { source: "Béja", destination: "Kef", distance: 105 },
    { source: "Béja", destination: "Ben Arous", distance: 119 },
    { source: "Béja", destination: "Gabès", distance: 408 },
    { source: "Béja", destination: "Gafsa", distance: 375 },
    { source: "Béja", destination: "Jendouba", distance: 50 },
    { source: "Béja", destination: "Kébili", distance: 506 },
    { source: "Béja", destination: "Bizerte", distance: 103 },
    { source: "Béja", destination: "Manouba", distance: 105 },
    { source: "Béja", destination: "Médenine", distance: 482 },
    { source: "Béja", destination: "Sidi Bouzid", distance: 290 },
    { source: "Béja", destination: "Siliana", distance: 102 },
    { source: "Béja", destination: "Tataouine", distance: 535 },
    { source: "Béja", destination: "Tozeur", distance: 467 },

    { source: "Zaghouan", destination: "Kef", distance: 148 },
    { source: "Zaghouan", destination: "Ben Arous", distance: 50 },
    { source: "Zaghouan", destination: "Gabès", distance: 370 },
    { source: "Zaghouan", destination: "Gafsa", distance: 299 },
    { source: "Zaghouan", destination: "Jendouba", distance: 171 },
    { source: "Zaghouan", destination: "Kébili", distance: 468 },
    { source: "Zaghouan", destination: "Bizerte", distance: 126 },
    { source: "Zaghouan", destination: "Manouba", distance: 63 },
    { source: "Zaghouan", destination: "Médenine", distance: 444 },
    { source: "Zaghouan", destination: "Sidi Bouzid", distance: 214 },
    { source: "Zaghouan", destination: "Siliana", distance: 91 },
    { source: "Zaghouan", destination: "Tataouine", distance: 497 },
    { source: "Zaghouan", destination: "Tozeur", distance: 391 },

    { source: "Kef", destination: "Ben Arous", distance: 173 },
    { source: "Kef", destination: "Gabès", distance: 364 },
    { source: "Kef", destination: "Gafsa", distance: 232 },
    { source: "Kef", destination: "Jendouba", distance: 56 },
    { source: "Kef", destination: "Kébili", distance: 344 },
    { source: "Kef", destination: "Bizerte", distance: 205 },
    { source: "Kef", destination: "Manouba", distance: 160 },
    { source: "Kef", destination: "Médenine", distance: 438 },
    { source: "Kef", destination: "Sidi Bouzid", distance: 165 },
    { source: "Kef", destination: "Siliana", distance: 71 },
    { source: "Kef", destination: "Tataouine", distance: 491 },
    { source: "Kef", destination: "Tozeur", distance: 324 },

    { source: "Ben Arous", destination: "Gabès", distance: 408 },
    { source: "Ben Arous", destination: "Gafsa", distance: 338 },
    { source: "Ben Arous", destination: "Jendouba", distance: 161 },
    { source: "Ben Arous", destination: "Kébili", distance: 506 },
    { source: "Ben Arous", destination: "Bizerte", distance: 80 },
    { source: "Ben Arous", destination: "Manouba", distance: 21 },
    { source: "Ben Arous", destination: "Médenine", distance: 481 },
    { source: "Ben Arous", destination: "Sidi Bouzid", distance: 265 },
    { source: "Ben Arous", destination: "Siliana", distance: 124 },
    { source: "Ben Arous", destination: "Tataouine", distance: 535 },
    { source: "Ben Arous", destination: "Tozeur", distance: 430 },

    { source: "Gabès", destination: "Gafsa", distance: 155 },
    { source: "Gabès", destination: "Jendouba", distance: 389 },
    { source: "Gabès", destination: "Kébili", distance: 118 },
    { source: "Gabès", destination: "Bizerte", distance: 483 },
    { source: "Gabès", destination: "Manouba", distance: 423 },
    { source: "Gabès", destination: "Médenine", distance: 75 },
    { source: "Gabès", destination: "Sidi Bouzid", distance: 176 },
    { source: "Gabès", destination: "Siliana", distance: 308 },
    { source: "Gabès", destination: "Tataouine", distance: 129 },
    { source: "Gabès", destination: "Tozeur", distance: 210 },

    { source: "Gafsa", destination: "Jendouba", distance: 287 },
    { source: "Gafsa", destination: "Kébili", distance: 111 },
    { source: "Gafsa", destination: "Bizerte", distance: 423 },
    { source: "Gafsa", destination: "Manouba", distance: 373 },
    { source: "Gafsa", destination: "Médenine", distance: 230 },
    { source: "Gafsa", destination: "Sidi Bouzid", distance: 102 },
    { source: "Gafsa", destination: "Siliana", distance: 250 },
    { source: "Gafsa", destination: "Tataouine", distance: 284 },
    { source: "Gafsa", destination: "Tozeur", distance: 92 },

    { source: "Jendouba", destination: "Kébili", distance: 400 },
    { source: "Jendouba", destination: "Bizerte", distance: 152 },
    { source: "Jendouba", destination: "Manouba", distance: 148 },
    { source: "Jendouba", destination: "Médenine", distance: 486 },
    { source: "Jendouba", destination: "Sidi Bouzid", distance: 213 },
    { source: "Jendouba", destination: "Siliana", distance: 103 },
    { source: "Jendouba", destination: "Tataouine", distance: 539 },
    { source: "Jendouba", destination: "Tozeur", distance: 379 },

    { source: "Kébili", destination: "Bizerte", distance: 582 },
    { source: "Kébili", destination: "Manouba", distance: 522 },
    { source: "Kébili", destination: "Médenine", distance: 192 },
    { source: "Kébili", destination: "Sidi Bouzid", distance: 205 },
    { source: "Kébili", destination: "Siliana", distance: 352 },
    { source: "Kébili", destination: "Tataouine", distance: 232 },
    { source: "Kébili", destination: "Tozeur", distance: 96 },

    { source: "Bizerte", destination: "Manouba", distance: 77 },
    { source: "Bizerte", destination: "Médenine", distance: 557 },
    { source: "Bizerte", destination: "Sidi Bouzid", distance: 329 },
    { source: "Bizerte", destination: "Siliana", distance: 200 },
    { source: "Bizerte", destination: "Tataouine", distance: 611 },
    { source: "Bizerte", destination: "Tozeur", distance: 523 },

    { source: "Manouba", destination: "Médenine", distance: 500 },
    { source: "Manouba", destination: "Sidi Bouzid", distance: 258 },
    { source: "Manouba", destination: "Siliana", distance: 125 },
    { source: "Manouba", destination: "Tataouine", distance: 553 },
    { source: "Manouba", destination: "Tozeur", distance: 434 },

    { source: "Médenine", destination: "Sidi Bouzid", distance: 250 },
    { source: "Médenine", destination: "Siliana", distance: 382 },
    { source: "Médenine", destination: "Tataouine", distance: 54 },
    { source: "Médenine", destination: "Tozeur", distance: 285 },

    { source: "Sidi Bouzid", destination: "Siliana", distance: 164 },
    { source: "Sidi Bouzid", destination: "Tataouine", distance: 305 },
    { source: "Sidi Bouzid", destination: "Tozeur", distance: 194 },


    { source: "Siliana", destination: "Tataouine", distance: 341 },
    { source: "Siliana", destination: "Tozeur", distance: 194 },

    { source: "Tataouine", destination: "Tozeur", distance: 338 },
  ];

  const selectedDistance = distances.find(
    (item) =>
      (item.source === governorateAddressSource && item.destination === governorateAddressDestination)
      ||
      (item.source === governorateAddressDestination && item.destination === governorateAddressSource)
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
