import { LeftSquareOutlined } from "@ant-design/icons"
import { Button } from "antd";
import { useHistory } from "react-router-dom";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { CarOutlined, NotificationOutlined, CreditCardOutlined, SettingOutlined } from "@ant-design/icons"
import "./MenuUser.scss";

const MenuUser = () => {
  const history = useHistory();

  return (
    <div className="contentImage">
      <img src="/imageAuth/imageAuth.jpg" className="imageAuth" />

      <div className="auth-Menu">
        <LeftSquareOutlined onClick={() => history.push("/mapInformation")} className="ClickRetourMenu" />
        <Avatar size={90} icon={<UserOutlined />} className="iconsImageProfile" />
        <h2> Zouhair Makhloufa </h2>
        <br></br>

        <CarOutlined /> <Button className="ButtonMenu" type="primary" htmlType="submit"
          onClick={() => history.push("/OrdersUser")}> My trip{" "}
        </Button> <br></br> <br></br>

        <SettingOutlined /><Button className="ButtonMenu" type="primary" htmlType="submit"
          onClick={() => history.push("/SettingUser")}> Setting{" "}
        </Button>

      </div>
    </div>
  );
};

export default MenuUser;