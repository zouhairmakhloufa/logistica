import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { LeftSquareOutlined, MenuOutlined } from "@ant-design/icons";
import { Timeline, Space, Card } from "antd";
import "./HomeDriver.scss";

const HomeDriver = () => {
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
  console.log("bookings", bookings);
  const bookingsByWaitingStatus = bookings?.filter(
    (item: any) => item.status === "en attente"
  );

  console.log("bookingsByWaitingStatus", bookingsByWaitingStatus);

  return (
    <div className="contentImage">
      <img src="/imageAuth/imageAuth.jpg" className="imageAuth" />

      <div className="auth-Menu">
        <LeftSquareOutlined
          onClick={() => history.push("/")}
          className="ClickRetourMenu"
        />
        <MenuOutlined
          onClick={() => history.push("/MenuDriver")}
          className="troisLigneMenu"
        />
        <h2 className="TextHome"> Home</h2>

        <div>
          <Space direction="vertical" className="Spacecenter">
            {bookingsByWaitingStatus &&
              bookingsByWaitingStatus.map((item: any) => (
                <button onClick={() => history.push(`/booking/${item._id}`)}>
                  <Card
                    title={`Car price : ${item.total} dt`}
                    style={{ width: 380 }}
                  >
                    <Timeline>
                      <Timeline.Item color="green">
                        {item.addressId.governorateAddressSource} <br></br>
                        {item.addressId.addresSource}{" "}
                      </Timeline.Item>
                      <Timeline.Item color="green">
                        {item.addressId.governorateAddressDestination} <br></br>
                        {item.addressId.addressDestination}{" "}
                      </Timeline.Item>
                    </Timeline>{" "}
                  </Card>
                </button>
              ))}
          </Space>
        </div>
      </div>
    </div>
  );
};
export default HomeDriver;
