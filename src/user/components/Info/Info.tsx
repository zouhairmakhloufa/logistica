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
      <img src="/imageAuth/imageAuth.jpg" className="imageAuth" />
      <div className="InfoBooking">
        <LeftSquareOutlined onClick={() => history.push("/NoteToDriver")} className="ClickRetour" />
        <h2 > Booking details</h2>
        <Timeline>
          <Timeline.Item color="green">6731 Al Ulaya, Al Wurud</Timeline.Item>
          <Timeline.Item color="green">King Khalid International Airport </Timeline.Item>
        </Timeline>  
        <br></br> <br></br> <br></br> <br></br><br></br>
        <h2 > Type of Cars</h2>
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
        <br></br> <br></br> <br></br> <br></br>
        <h2 > Payment Methode</h2>
        <DollarOutlined style={{ fontSize: '22px', color: '#08c' }} /> <Button className="ButtonMenu" type="primary" htmlType="submit"
          onClick={() => history.push("")}> Cach{" "}
        </Button>
        <h2 > Note To Driver</h2>
        <h4>E.g I am located on the right side of</h4>
        <h2> Pricing</h2>
        <h4> Delivery Service</h4> 5dt
        <h4> Boarding Service</h4> 5dt
        <h4> Shipping Service</h4> 5dt
        <h4> Cortoon Service</h4> 5dt
        <h3 className="totale">  Total Amount</h3> 20dt
        <Button className="button-NoteDriver" type="primary" htmlType="submit"
          style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
          onClick={() => history.push("/BookingSuccessful")}

        > Book Now{" "}
        </Button>

      </div>
    </div>
  );
};
export default Info;