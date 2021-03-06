import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { Rate } from 'antd';
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
  const [rate, setRating] = useState(0);

  const addRating = async (value: any, id: any) => {
    await axios.put(`http://localhost:5000/booking/rating/${id}`, { rate: value })
    setRating(value)
  }

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
  console.log("rate", rate)
  return (
    <div className="contentImage">
      <img src="/my trip/my trip.jpg" className="imageAuth" />

      <div className="auth-Menu">
        {status === "succes" && (
          <Alert message="successfully done" type="success" showIcon closable />
        )}
        {status === "error" && (
          <Alert message="Error" type="error" showIcon closable />
        )}
        <h2> My trip </h2>

        <Tabs defaultActiveKey="1" onChange={callback} className="tabs1">
          <TabPane tab="Wating" key="1" className="tabs">
            {bookingsByWaitingStatus &&
              bookingsByWaitingStatus.map((item: any) => (
                <div>
                  <Button
                     style={{ background: "#e6e6e6", borderColor: "#e6e6e6" }}
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
                    <h3 className="xx"> Your reservation is on hold </h3>
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
                    style={{ background: "#e6e6e6", borderColor: "#e6e6e6" }}
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
                    <h3 className="xx"> Your Reservation in the process of delivery </h3>
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
                    style={{ background: "#e6e6e6", borderColor: "#e6e6e6" }}
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
                    <h3 className="xx"> your reservation has been Finished </h3>
                    <span className="rate">
                      <Rate onChange={(value) => addRating(value, item._id)} value={rate} />
                      <span className="ant-rate-text">{rate} stars</span>
                    </span>
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
                    style={{ background: "#e6e6e6", borderColor: "#e6e6e6" }}
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
                    <h3 className="xx"> your reservation has been refused </h3>
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
