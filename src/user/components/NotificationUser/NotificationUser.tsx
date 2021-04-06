import { Result } from "antd";
import { LeftSquareOutlined } from "@ant-design/icons"
import { useHistory } from "react-router-dom";
import { List } from 'antd';
import "./NotificationUser.scss"

const data1= [
  {
    title: 'System',
  },
];
const data2= [
  {
    title: 'System',
  },
];
const data3= [
  {
    title: 'System',
  },
];


const NotificationUser = () => {
  const history = useHistory();
  return (
    <div className="contentImage">
     <img src="/imageAuth/imageAuth.jpg" className="imageAuth" />
      <div className="auth-signup-info">  

        <LeftSquareOutlined onClick={() => history.push("/MenuUser")} className="ClickRetour" />
        <h2> Notification </h2>
        <button   onClick={() => history.push("")} className="buttonList">
        <div className="succes">
          <List
            itemLayout="horizontal"
            className="ant-result"
            dataSource={data1}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Result status="success"  className="iconsSucces"/>}
                  title={<a>{item.title}</a>}
                  description="salut driver cv"
                />
              </List.Item>
            )}
          />
        </div>
        </button>
        <button   onClick={() => history.push("")} className="buttonList">
        <div className="succes">
          <List
            itemLayout="horizontal"
            className="ant-result"
            dataSource={data2}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Result status="error" />}
                  title={<a>{item.title}</a>}
                  description="salut driver cv"
                />
              </List.Item>
            )}
          />
        </div>
        </button>

      </div>
    </div>
  );
};
export default NotificationUser;
