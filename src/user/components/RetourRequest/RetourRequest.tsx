import { Button,Timeline, List, Avatar } from "antd";
import { LeftSquareOutlined } from "@ant-design/icons"
import { useHistory } from "react-router-dom";
import "./RetourRequest.scss"
const data1 = [
  {
    title: 'Distance : ',
  },
];
const data2 = [
  {
    title: 'Time : ',
  },
];
const data3 = [
  {
    title: 'PRICE : ',
  },
]

const RetourRequest = () => {
  const history = useHistory();
  return (
    <div className="contentImage">
      <img src="/imageAuth/imageAuth.jpg" className="imageAuth" />
      <div className="RetourRequest">
        <br></br>    <br></br>    <br></br>    <br></br>
        <LeftSquareOutlined onClick={() => history.push("/NoteToDriver")} className="ClickRetour" />
        <br></br>    <br></br>    <br></br>    

        <Timeline>
          <Timeline.Item color="green">6731 Al Ulaya, Al Wurud</Timeline.Item>
          <Timeline.Item color="green">King Khalid International Airport </Timeline.Item>
        </Timeline>
        <div className="ListCars">
          <List
            itemLayout="horizontal"
            dataSource={data1}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="/imageTypeOfCars/CarsPNG.jpg" />}
                  title={<a>{item.title}</a>}
                  description=" 0.2 km"
                />
              </List.Item>
            )}
          />
             <List
            itemLayout="horizontal"
            dataSource={data2}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  title={<a>{item.title}</a>}
                  description="2 min"
                />
              </List.Item>
            )}
          />
                  <List
            itemLayout="horizontal"
            dataSource={data3}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  title={<a>{item.title}</a>}
                  description="8 dt"
                />
              </List.Item>
            )}
          />
          </div>
          <Button className="button-Next-poids" type="primary" htmlType="submit"
          style={{ background: "#f70d1a", borderColor: "#f70d1a" }}
        >
          Cancel Request{" "}
        </Button> <Button className="button-RetourRequest" type="primary" htmlType="submit"
          style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
        >
          Accept Request{" "}
        </Button>
      </div>
    </div>
  );
};
export default RetourRequest;