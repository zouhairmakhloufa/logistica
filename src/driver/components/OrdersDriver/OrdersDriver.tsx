import { useHistory } from "react-router-dom";
import "./OrdersDriver.scss";
import { LeftSquareOutlined } from "@ant-design/icons";
import { Button, Tabs, Timeline } from "antd";

const { TabPane } = Tabs;
function callback(key: any) {
  console.log(key);
}

const OrdersDriver = () => {
  const history = useHistory();
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
            <div>
              <Button
                onClick={() => history.push("/InfoDetailCurrent")}
                style={{ background: "#d6d6d6", borderColor: "#d6d6d6" }}
              >
                <Timeline>
                  <Timeline.Item color="green">
                    6731 Al Ulaya, Al Wurud
                  </Timeline.Item>
                  <Timeline.Item color="green">
                    King Khalid International Airport{" "}
                  </Timeline.Item>
                </Timeline>{" "}
              </Button>
            </div>
            <br></br> <br></br>
            <div style={{ display: "flex" }}>
              <h3 style={{ marginRight: "120px" }}> 8dt</h3>
              <h3>Adem Ragheb</h3>
            </div>
          </TabPane>
          <TabPane tab="Finished" key="2" className="tabs">
            <br></br>
            <h3> Adem Ragheb</h3>
          </TabPane>
          <TabPane tab="Canceled" key="3" className="tabs">
            <br></br>
            <div>
              <Button
                onClick={() => history.push("/InfoDetailCurrent")}
                style={{ background: "#d6d6d6", borderColor: "#d6d6d6" }}
              >
                <Timeline>
                  <Timeline.Item color="green">
                    6731 Al Ulaya, Al Wurud
                  </Timeline.Item>
                  <Timeline.Item color="green">
                    King Khalid International Airport{" "}
                  </Timeline.Item>
                </Timeline>{" "}
              </Button>
            </div>
            <br></br> <br></br>
            <div style={{ display: "flex" }}>
              <h3 style={{ marginRight: "120px" }}> 8dt</h3>
              <h3>Mohamed Ali</h3>
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};
export default OrdersDriver;
