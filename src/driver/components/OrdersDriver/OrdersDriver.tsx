import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./OrdersDriver.scss";
import { LeftSquareOutlined } from "@ant-design/icons";
import { Button, Tabs, Timeline } from "antd";

const { TabPane } = Tabs;
function callback(key: any) {
  console.log(key);
}

const OrdersDriver = () => {
  const history = useHistory();
  const [bookings, setBookings]: any = useState(null);

  useEffect(() => {
    const fetchBooking = async () => {
      const result = await axios.get(
        `http://localhost:5000/booking/driver/booking/${localStorage.getItem(
          "userid"
        )}`
      );
      setBookings(result.data.bookings);
    };
    fetchBooking();
  }, []);

  const bookingsByWaitingStatus = bookings?.filter(
    (item: any) => item.status === "en attente"
  );

  const bookingsByfinishedStatus = bookings?.filter(
    (item: any) => item.status === "terminé"
  );

  const bookingsBycancledStatus = bookings?.filter(
    (item: any) => item.status === "annulé"
  );
  return (
    <div className="contentImage">
      <img src="/imageAuth/imageAuth.jpg" className="imageAuth" />

      <div className="auth-Menu">
        <LeftSquareOutlined
          onClick={() => history.push("/MenuDriver")}
          className="ClickRetourMenu"
        />
        <h2> Orders </h2>

        <Tabs defaultActiveKey="1" onChange={callback}>
          <br></br> <br></br>
          <TabPane tab="Current" key="1" className="tabs">
            <br></br>
            {bookingsByWaitingStatus &&
              bookingsByWaitingStatus.map((item: any) => (
                <div>
                  <Button
                    onClick={() => history.push("/InfoDetailCurrent")}
                    style={{ background: "#d6d6d6", borderColor: "#d6d6d6" }}
                  >
                    <Timeline>
                      <Timeline.Item color="green">
                        {item.addressId.addresSource}{" "}
                        {item.addressId.governorateAddressSource}{" "}
                      </Timeline.Item>
                      <Timeline.Item color="green">
                        {item.addressId.addressDestination}{" "}
                        {item.addressId.governorateAddressDestination}{" "}
                      </Timeline.Item>
                    </Timeline>
                  </Button>
                  <div style={{ display: "flex" }}>
                    <h3 style={{ marginRight: "120px" }}> {item.total}</h3>
                    <h3>
                      {item.userId.firstName} {item.userId.lastName}
                    </h3>
                  </div>
                </div>
              ))}
          </TabPane>
          <TabPane tab="Finished" key="2" className="tabs">
            <br></br>
            {bookingsByfinishedStatus &&
              bookingsByfinishedStatus.map((item: any) => (
                <div>
                  <Button
                    onClick={() => history.push("/InfoDetailCurrent")}
                    style={{ background: "#d6d6d6", borderColor: "#d6d6d6" }}
                  >
                    <Timeline>
                      <Timeline.Item color="green">
                        {item.addressId.addresSource}{" "}
                        {item.addressId.governorateAddressSource}{" "}
                      </Timeline.Item>
                      <Timeline.Item color="green">
                        {item.addressId.addressDestination}{" "}
                        {item.addressId.governorateAddressDestination}{" "}
                      </Timeline.Item>
                    </Timeline>
                  </Button>
                  <div style={{ display: "flex" }}>
                    <h3 style={{ marginRight: "120px" }}> {item.total}</h3>
                    <h3>
                      {item.userId.firstName} {item.userId.lastName}
                    </h3>
                  </div>
                </div>
              ))}
          </TabPane>
          <TabPane tab="Canceled" key="3" className="tabs">
            <br></br>
            {bookingsBycancledStatus &&
              bookingsBycancledStatus.map((item: any) => (
                <div>
                  <Button
                    onClick={() => history.push("/InfoDetailCurrent")}
                    style={{ background: "#d6d6d6", borderColor: "#d6d6d6" }}
                  >
                    <Timeline>
                      <Timeline.Item color="green">
                        {item.addressId.addresSource}{" "}
                        {item.addressId.governorateAddressSource}{" "}
                      </Timeline.Item>
                      <Timeline.Item color="green">
                        {item.addressId.addressDestination}{" "}
                        {item.addressId.governorateAddressDestination}{" "}
                      </Timeline.Item>
                    </Timeline>
                  </Button>
                  <div style={{ display: "flex" }}>
                    <h3 style={{ marginRight: "120px" }}> {item.total}</h3>
                    <h3>
                      {item.userId.firstName} {item.userId.lastName}
                    </h3>
                  </div>
                </div>
              ))}
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};
export default OrdersDriver;
