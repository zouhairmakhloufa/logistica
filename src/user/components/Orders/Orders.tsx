import { useHistory } from "react-router-dom";
import "./Orders.scss";
import { LeftSquareOutlined } from "@ant-design/icons"
import { Tabs, Timeline } from 'antd';

const { TabPane } = Tabs;
function callback(key: any) {
  console.log(key);
}

const Orders = () => {
  const history = useHistory();
  return (
    <div className="contentImage">
      <img src="/imageAuth/imageAuth.jpg" className="imageAuth" />

      <div className="auth-Menu">
      <LeftSquareOutlined onClick={() => history.push("/Menu")} className="ClickRetourMenu" />

        <Tabs defaultActiveKey="1" onChange={callback}>
          <br></br> <br></br>
          <TabPane tab="Current" key="1">
          <br></br> 
            <Timeline>
              <Timeline.Item color="green">6731 Al Ulaya, Al Wurud</Timeline.Item>
              <Timeline.Item color="green">King Khalid International Airport </Timeline.Item>
            </Timeline> <br></br>  <br></br>  <br></br> <br></br> <br></br>
            <h4> 8dt </h4>    <h4> Adem Ragheb</h4>
          </TabPane>
          <TabPane tab="Finished" key="2">
          <br></br>
          <h3> Adem Ragheb</h3>

    </TabPane>
          <TabPane tab="Canceled" key="3">
          <br></br>
          <h3> Adem Ragheb</h3>

    </TabPane>
        </Tabs>
      </div>
    </div>

  );
};
export default Orders;
