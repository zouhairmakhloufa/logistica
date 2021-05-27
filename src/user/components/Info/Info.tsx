import { Button, Timeline, List, Avatar,Popconfirm } from "antd";
import { LeftSquareOutlined, DollarOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import BookinContext from "../../../context/booking";
import axios from "axios";
import "./Info.scss";

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
    carName,
    distance,
    priceService,
    pricePackaging,
    total,
  }: any = useContext(BookinContext);
  console.log("typeOfCars", typeOfCars);
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
              {governorateAddressSource}  {addresSource}
            </Timeline.Item>
            <Timeline.Item color="green">
              {governorateAddressDestination} {addressDestination}
            </Timeline.Item>
          </Timeline>
        </div>
        <div className="infoBag">
          <h2> information about your bag </h2>
          <h4> weight : {poids} kg </h4>
          <h4>height :{hauteur} cm </h4>
          <h4>width : {largeur} cm </h4>
          <h4>depth : {profondeur} cm </h4>
        </div>
        <div className="typeofcars">
          <h2> Type of Cars</h2>
          <List
            itemLayout="horizontal"
            dataSource={[carName]}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="/imageTypeOfCars/CarsPNG.jpg" />}
                  title={<a>{item}</a>}
                  description={`1-1000 Kg ,  klm price: ${item.klmPrice}dt  
                  , base price: ${item.basePrice}dt   total: ${
                    Number(distance) * Number(item.klmPrice) + Number(item.basePrice) }dt `}
                />
              </List.Item>
            )}
          />
        </div>

        <div className="paymentMethode">
          <h2 className="text-paymentMethode"> Payment Methode</h2>
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
          <h2 className="text-totale-amount">Total Amount</h2>
          <h4 className="TotalAmount1">{total+priceService+pricePackaging} dt</h4>
        </div>
        <div>
     
        <Button
          className="buttonConfirm"
          type="primary"
          htmlType="submit"
          style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
          onClick={async () => {
            const booking = await axios.post(
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
                total,
              }
            );

            console.log("booking", booking);

            await axios.post("http://localhost:5000/Booking/sendemail", {
              driverId,
              token: localStorage.getItem("token"),
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
              bookingId: booking.data.newBooking._id,
              total,
            });
            history.push("/BookingSuccessful");
          }}
        >
          {" "}
          Confirm {" "}
        </Button>
    
        <Button
            className="buttonMap"
            type="primary"
            style={{ background: "red", borderColor: "red" }}
            onClick={() => history.push("/")}
          >
            Cancel
          </Button>

      </div>
      </div>
    </div>
  );
};
export default Info;
