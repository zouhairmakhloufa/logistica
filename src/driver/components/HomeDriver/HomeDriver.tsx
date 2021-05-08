import { useHistory } from "react-router-dom";
import "./HomeDriver.scss";
import { LeftSquareOutlined, MenuOutlined } from "@ant-design/icons";
import { Timeline, Space, Card } from "antd";

const HomeDriver = () => {
  const history = useHistory();
  return (
    <div className="contentImage">
      <img src="/imageAuth/imageAuth.jpg" className="imageAuth" />

      <div className="auth-Menu">
        <LeftSquareOutlined
          onClick={() => history.push("/")} className="ClickRetourMenu" />
        <MenuOutlined onClick={() => history.push("/MenuDriver")} className="troisLigneMenu" />
        <h2 className="TextHome"> Home</h2>

        <div >
          <Space direction="vertical">
            <button onClick={() => history.push("/Detaille")}>
              <Card title="adem ragheb  18dt" style={{ width: 380 }}>
                <Timeline>
                  <Timeline.Item color="green">
                    6731 Al Ulaya, Al Wurud{" "}
                  </Timeline.Item>
                  <Timeline.Item color="green">
                    King Khalid International Airport{" "}
                  </Timeline.Item>
                </Timeline>{" "}
              </Card>
            </button>

            <button onClick={() => history.push("/Detaille")}>
              <Card title="adem ragheb 15dt" style={{ width: 380 }}>
                <Timeline>
                  <Timeline.Item color="green">
                    6731 Al Ulaya, Al Wurud{" "}
                  </Timeline.Item>
                  <Timeline.Item color="green">
                    King Khalid International Airport{" "}
                  </Timeline.Item>
                </Timeline>{" "}
              </Card>
            </button>

          </Space>
        </div>
      </div>
    </div>
  );
};
export default HomeDriver