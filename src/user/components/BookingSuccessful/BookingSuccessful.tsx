import { Result, Button } from "antd";
import { LeftSquareOutlined } from "@ant-design/icons"
import { useHistory } from "react-router-dom";
import "./BookingSuccessful.scss"


const BookingSuccessful = () => {
  const history = useHistory();
  return (
    <div className="contentImage">
      <img src="/imageAuth/imageAuth.jpg" className="imageAuth" />
      <div className="auth-signup-info">

        <LeftSquareOutlined onClick={() => history.push("/Info")} className="ClickRetour" />
        <Result status="success" title="Booking Successfull" />

        <Button className="button-Done-Successful" type="primary" htmlType="submit"
          style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
          onClick={() => history.push("")}
        > Done{" "}
        </Button>
      </div>
    </div>
  );
};
export default BookingSuccessful;