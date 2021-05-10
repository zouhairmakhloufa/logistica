import { Button, Timeline } from "antd";
import { LeftSquareOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { List, Avatar } from "antd";
import { DollarOutlined } from "@ant-design/icons";
import BookinContext from "../../../context/booking";
import axios from "axios";
import "./Info.scss";

const data = [
  {
    title: "Logistica cars",
  },
];
const Info = () => {
  const history = useHistory();
  const {
    governorateAddressSource,
    addresSource,
    governorateAddressDestination,
    addressDestination,
    poids,
    hauteur,
    largeur,
    profondeur,
    typeOfCars,
    service,
    packaging,
    noteToDriver,
    driverId,
  }: any = useContext(BookinContext);

  return (
    <div className="contentImage">
      <img src="/imageAuth/imageAuth.jpg" className="imageAuthInfoUser" />
      <div className="InfoBooking">
        <LeftSquareOutlined
          onClick={() => history.push("/NoteToDriver")}
          className="ClickRetourInfo"
        />

        <div>
          <h2> Booking details</h2>
          <Timeline className="timelineInfo">
            <Timeline.Item color="green">
              {governorateAddressSource} <br></br> {addresSource}
            </Timeline.Item>
            <Timeline.Item color="green">
              {governorateAddressDestination} <br></br> {addressDestination}
            </Timeline.Item>
          </Timeline>
        </div>

        <div className="typeofcars">
          <h2> Type of Cars</h2>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="/imageTypeOfCars/CarsPNG.jpg" />}
                  title={<a>{item.title}</a>}
                  description=" 1-1000 Kg"
                />
              </List.Item>
            )}
          />
        </div>

        <div className="paymentMethode">
          <h2 className="TextPaymentMethode"> Payment Methode</h2>
          <DollarOutlined style={{ fontSize: "22px", color: "#08c" }} />{" "}
          <Button className="ButtonCach" type="primary" htmlType="submit">
            {" "}
            Cach{" "}
          </Button>
        </div>

        <div className="noteToDriver">
          <h2> Note To Driver</h2>
          <h4>{noteToDriver}</h4>
        </div>

        <h2> Pricing</h2>
        <div style={{ display: "flex" }} className="Pricing">
          <h4 className="pricingDeliveryequipe"> Delivery Service</h4>
          <h4>5 dt</h4>
        </div>
        <div style={{ display: "flex" }} className="Pricing">
          <h4 className="pricingBoardingequipe"> Boarding Service</h4>
          <h4>5 dt</h4>
        </div>
        <div style={{ display: "flex" }} className="Pricing">
          <h4 className="pricingShippingequipe"> {service} </h4>
        </div>
        <div style={{ display: "flex" }} className="Pricing">
          <h4 className="pricingequipe">{packaging}</h4>
        </div>

        <div style={{ display: "flex" }} className="totalText">
          <h2 className="texttottalamount">Total Amount</h2>
          <h4 className="TotalAmount20">18 dt</h4>
        </div>

        <Button
          className="button-Info"
          type="primary"
          htmlType="submit"
          style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
          onClick={async () => {
            const user = await axios.post(
              "http://localhost:5000/Booking/booking",
              {
                governorateAddressSource,
                addresSource,
                governorateAddressDestination,
                addressDestination,
                poids,
                hauteur,
                largeur,
                profondeur,
                typeOfCars,
                service,
                packaging,
                paymentMethode: "cache",
                noteToDriver,
                driverId,
                token: localStorage.getItem("token"),
              }
            );
            history.push("/BookingSuccessful");
          }}
        >
          {" "}
          Book Now{" "}
        </Button>
      </div>
    </div>
  );
};
export default Info;
