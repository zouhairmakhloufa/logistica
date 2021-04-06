import { Button, Timeline } from "antd";
import { LeftSquareOutlined } from "@ant-design/icons"
import { useHistory } from "react-router-dom";
import "./HomeDriver.scss"

const HomeDriver = () => {
  const history = useHistory();
  return (
    <div className="contentImage">
      <img src="/imageAuth/imageAuth.jpg" className="imageAuth" />
      <div className="auth-signup-info">

        <LeftSquareOutlined onClick={() => history.push("/MenuUser")} className="ClickRetour" />
        <h2> Home </h2>
        <div>
              <Button onClick={() => history.push("/InfoDetailCurrent")} >
                <Timeline>
                  <Timeline.Item color="green">6731 Al Ulaya, Al Wurud</Timeline.Item>
                  <Timeline.Item color="green">King Khalid International Airport </Timeline.Item>
                </Timeline> {" "}
              </Button>
            </div>
            <br></br>  <br></br>
            <div style={{ display: "flex" }} className="">
              <h3 style={{ marginRight: "120px" }}> 8dt</h3>
              <h3 >Adem Ragheb</h3>
            </div>
      </div>
    </div>
  );
};
export default HomeDriver;
