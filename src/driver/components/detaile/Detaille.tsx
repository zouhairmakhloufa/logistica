import { Button, Timeline } from "antd";
import { LeftSquareOutlined } from "@ant-design/icons"
import { useHistory } from "react-router-dom";
import { DollarOutlined } from "@ant-design/icons"
import "./Detaille.scss"

const data = [
  {
    title: 'Logistica cars',
  },
];
const Detaille = () => {
  const history = useHistory();
  return (
    <div className="contentImage">
      <img src="/imageAuth/imageAuth.jpg" className="imageAuthInfo" />
      <div className="InfoBooking">
        <LeftSquareOutlined onClick={() => history.push("/HomeDriver")} className="ClickRetour" />

        <div>
          <h2>Details</h2>
          <Timeline className="timelineinfo">
            <Timeline.Item color="green">6731 Al Ulaya, Al Wurud</Timeline.Item>
            <Timeline.Item color="green">King Khalid International Airport </Timeline.Item>
          </Timeline>
        </div>
        <div className="paymentMethode">
          <h2 className="TextPaymentMethode"> Payment Methode</h2>
          <DollarOutlined style={{ fontSize: '22px', color: '#08c' }} /> <Button className="ButtonCach" type="primary" htmlType="submit"
          > Cach{" "}
          </Button>
        </div>

        <div className="noteToDriver">
          <h2 > Note To Driver</h2>
          <h4>E.g I am located on the right side of</h4>
        </div>

        <h2> Pricing</h2>
        <div style={{ display: "flex" }} className="Pricing" >
          <h4 className="pricingDeliveryequipe"> Delivery Service</h4>
          <h4>5 dt</h4>
        </div>
        <div style={{ display: "flex" }} className="Pricing" >
          <h4 className="pricingBoardingequipe"> Boarding Service</h4>
          <h4>5 dt</h4>
        </div>
        <div style={{ display: "flex" }} className="Pricing" >
          <h4 className="pricingShippingequipe"> Shipping Service</h4>
          <h4>5 dt</h4>
        </div>
        <div style={{ display: "flex" }} className="Pricing" >
          <h4 className="pricingequipe"> Cortoon Service</h4>
          <h4>5 dt</h4>
        </div>
        <br></br>
        <div style={{ display: "flex" }} className="totalText">
          <h2 className="texttottalamount">Total Amount</h2>
          <h4 className="TotalAmount20">20 dt</h4>
        </div>
        <Button
          className="button-Accept-Offer"
          type="primary"
          htmlType="submit"
          style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
          onClick={() => history.push("/HomeDriver")}> Accept offer{" "}
        </Button>
        <Button
          className="button-cancel-Offer"
          type="primary"
          htmlType="submit"
          style={{ background: "red", borderColor: "red" }}
          onClick={() => history.push("/HomeDriver")}> Cancel offer{" "}
        </Button>
      </div>
    </div>
  );
};
export default Detaille;