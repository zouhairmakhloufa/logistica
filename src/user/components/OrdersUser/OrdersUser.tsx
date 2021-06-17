import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Tabs, Timeline, Alert } from "antd";
import "./OrdersUser.scss";

const { TabPane } = Tabs;
function callback(key: any) {
  console.log(key);
}

const OrdersUser = () => {
  const history = useHistory();
  const [bookings, setBookings]: any = useState(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchBooking = async () => {
      const result = await axios.get(
        `http://localhost:5000/booking/user/booking/${localStorage.getItem(
          "userid"
        )}`
      );
      setBookings(result.data.bookings);
    };
    fetchBooking();
  }, []);
  console.log("bookings", bookings);
  const bookingsByWaitingStatus = bookings?.filter(
    (item: any) => item.status === "en attente"
  );

  const bookingsByCurrentStatus = bookings?.filter(
    (item: any) => item.status === "accepter"
  );

  const bookingsByfinishedStatus = bookings?.filter(
    (item: any) => item.status === "terminé"
  );

  const bookingsBycancledStatus = bookings?.filter(
    (item: any) => item.status === "refuser"
  );
  console.log("bookings By Waiting Status :", bookingsByWaitingStatus);
  return (
    <div className="contentImage">
      <img src="/imageAuth/imageAuth.jpg" className="imageAuth" />

      <div className="auth-Menu">
        {status === "succes" && (
          <Alert message="successfully done" type="success" showIcon closable />
        )}
        {status === "error" && (
          <Alert message="Error" type="error" showIcon closable />
        )}
        <h2> Orders </h2>

        <Tabs defaultActiveKey="1" onChange={callback} className="tabs1">
          <TabPane tab="Wating" key="1" className="tabs">
            {bookingsByWaitingStatus &&
              bookingsByWaitingStatus.map((item: any) => (
                <div>
                  <Button
                    onClick={() => history.push("/InfoDetailCurrent")}
                    style={{ background: "#d6d6d6", borderColor: "#d6d6d6" }}
                  >
                    <Timeline className="timeline">
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
                    <h3> Your reservation is on hold </h3>
                  </div>


                </div>
              ))}
          </TabPane>

          <TabPane tab="Current" key="2" className="tabs">
            {bookingsByCurrentStatus &&
              bookingsByCurrentStatus.map((item: any) => (
                <div>
                  <Button
                    onClick={() => history.push("/InfoDetailCurrent")}
                    style={{ background: "#d6d6d6", borderColor: "#d6d6d6" }}
                  >
                    <Timeline className="timeline">
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
                    <h3> Your Reservation in the process of delivery </h3>
                  </div>
                </div>
              ))}
          </TabPane>
          <TabPane tab="Finished" key="3" className="tabs">
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
                    <h3> your reservation has been Finished </h3>
                  </div>
                </div>
              ))}
          </TabPane>

          <TabPane tab="Canceled" key="4" className="tabs">
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
                    <h3> your reservation has been refused </h3>
                  </div>
                </div>
              ))}
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};
export default OrdersUser;
