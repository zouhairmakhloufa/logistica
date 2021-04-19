import { Button, Timeline, Popconfirm } from "antd";
import { LeftSquareOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { DollarOutlined } from "@ant-design/icons";

import "./Detaille.scss";

const data = [
  {
    title: "Logistica cars",
  },
];
const Detaille = () => {
  const history = useHistory();
  return (
    <div className="contentImage">
      <img src="/imageAuth/imageAuth.jpg" className="imageAuthInfo" />
      <div className="InfoBooking">
        <LeftSquareOutlined
          onClick={() => history.push("/HomeDriver")}
          className="ClickRetourDetaille"
        />

        <div>
          <h2>Details</h2>
          <Timeline className="timelineinfo">
            <Timeline.Item color="green">6731 Al Ulaya, Al Wurud</Timeline.Item>
            <Timeline.Item color="green">
              King Khalid International Airport{" "}
            </Timeline.Item>
          </Timeline>
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
          <h4>E.g I am located on the right side of</h4>
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
          <h4 className="pricingShippingequipe"> Shipping Service</h4>
          <h4>5 dt</h4>
        </div>
        <div style={{ display: "flex" }} className="Pricing">
          <h4 className="pricingequipe"> Cortoon Service</h4>
          <h4>5 dt</h4>
        </div>
        <br></br>
        <div style={{ display: "flex" }} className="totalText">
          <h2 className="texttottalamount">Total Amount</h2>
          <h4 className="TotalAmount20">20 dt</h4>
        </div>

        <Popconfirm
          title={"are you sure ?"}
          onConfirm={() => history.push("/HomeDriver")}
        >
          <Button
            className="buttonMap"
            type="primary"
            style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
          >
            Accept offer
          </Button>
        </Popconfirm>

        <Popconfirm
          title={"are you sure ?"}
          onConfirm={() => history.push("/HomeDriver")}>
          <Button
            className="buttonMap"
            type="primary"
            style={{ background: "red", borderColor: "red" }}
          >
            Cancel offer
          </Button>
        </Popconfirm>
      </div>
    </div>
  );
};
export default Detaille;
