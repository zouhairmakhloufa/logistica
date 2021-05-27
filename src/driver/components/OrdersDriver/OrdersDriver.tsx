import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { LeftSquareOutlined } from "@ant-design/icons";
import { Button, Tabs, Timeline } from "antd";
import "./OrdersDriver.scss";

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

        <Tabs defaultActiveKey="1" onChange={callback} className="tabs1">
          <TabPane tab="Current" key="1" className="tabs">
            {bookingsByWaitingStatus &&
              bookingsByWaitingStatus.map((item: any) => (
                <div>
                  <Button
                    onClick={() => history.push("/InfoDetailCurrent")}
                    style={{ background: "#d6d6d6", borderColor: "#d6d6d6" }}
                  >
                    <Timeline>
                      <Timeline.Item color="green">
                        {item.addressId.governorateAddressSource}{" "}
                        {item.addressId.addresSource}{" "}
                      </Timeline.Item>
                      <Timeline.Item color="green">
                        {item.addressId.governorateAddressDestination}{" "}
                        {item.addressId.addressDestination}{" "}
                      </Timeline.Item>
                    </Timeline>
                  </Button>

                  <div style={{ display: "flex" }}>

                    <h3 style={{ marginRight: "120px" }}> Car Price {item.total} </h3>

                    <h3> {item.userId.firstName} {item.userId.lastName}  </h3>

                  </div>
                </div>
              ))}
          </TabPane>
          <TabPane tab="Finished" key="2" className="tabs">

            {bookingsByfinishedStatus &&
              bookingsByfinishedStatus.map((item: any) => (
                <div>
                  <Button
                    onClick={() => history.push("/InfoDetailCurrent")}
                    style={{ background: "#d6d6d6", borderColor: "#d6d6d6" }}
                  >
                    <Timeline>
                      <Timeline.Item color="green">
                        {item.addressId.governorateAddressSource}{" "}
                        {item.addressId.addresSource}{" "}
                      </Timeline.Item>
                      <Timeline.Item color="green">
                        {item.addressId.governorateAddressDestination}{" "}
                        {item.addressId.addressDestination}{" "}
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

            {bookingsBycancledStatus &&
              bookingsBycancledStatus.map((item: any) => (
                <div>
                  <Button
                    onClick={() => history.push("/InfoDetailCurrent")}
                    style={{ background: "#d6d6d6", borderColor: "#d6d6d6" }}
                  >
                    <Timeline>
                      <Timeline.Item color="green">
                        {item.addressId.governorateAddressSource}{" "}
                        {item.addressId.addresSource}{" "}
                      </Timeline.Item>
                      <Timeline.Item color="green">
                        {item.addressId.governorateAddressDestination}{" "}
                        {item.addressId.addressDestination}{" "}
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
