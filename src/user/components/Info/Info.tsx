import { Button, Timeline } from "antd";
import { LeftSquareOutlined } from "@ant-design/icons"
import { useHistory } from "react-router-dom";
import { List, Avatar } from 'antd';
import { DollarOutlined } from "@ant-design/icons"
import "./Info.scss"

const data = [
  {
    title: 'Logistica cars',
  },
];
const Info = () => {
  const history = useHistory();
  return (
    <div className="contentImage">
      <img src="/imageAuth/imageAuth.jpg" className="imageAuthInfoUser" />
      <div className="InfoBooking">
        <LeftSquareOutlined onClick={() => history.push("/NoteToDriver")} className="ClickRetour" />

        <div>
          <h2> Booking details</h2>
          <Timeline className="timelineinfo">
            <Timeline.Item color="green">6731 Al Ulaya, Al Wurud</Timeline.Item>
            <Timeline.Item color="green">King Khalid International Airport </Timeline.Item>
          </Timeline>
        </div>

        <div className="typeofcars">
          <h2> Type of Cars</h2>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
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

        <div style={{ display: "flex" }} className="totalText">
          <h2 className="texttottalamount">Total Amount</h2>
          <h4 className="TotalAmount20">20 dt</h4>
        </div>

        <Button className="button-Info" type="primary" htmlType="submit"
          style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
          onClick={() => history.push("/BookingSuccessful")}> Book Now{" "}
        </Button>

      </div>
    </div>
  );
};
export default Info;