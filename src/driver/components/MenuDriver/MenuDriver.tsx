import { LeftSquareOutlined } from "@ant-design/icons"
import { Button } from "antd";
import { useHistory } from "react-router-dom";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { CarOutlined, SettingOutlined } from "@ant-design/icons"
import "./MenuDriver.scss";

const MenuDriver = () => {
  const history = useHistory();

  return (
    <div className="contentImage">
      <img src="/imageAuth/imageAuth.jpg" className="imageAuth" />

      <div className="auth-Menu">
        <Avatar size={90} icon={<UserOutlined />} className="iconsImageProfile" />
        <h2> {localStorage.getItem("userName")}  </h2>
        <br></br>
        <div>
          <CarOutlined />
          <Button className="ButtonMenu" type="primary" htmlType="submit"
            onClick={() => history.push("/HomeDriver")}> Home
        </Button>
        </div>

        <div>  <CarOutlined />
          <Button className="ButtonMenu" type="primary" htmlType="submit"
            onClick={() => history.push("/OrdersDriver")}> Mytrip
        </Button>
        </div>

        <div>
          <SettingOutlined />
          <Button className="ButtonMenu" type="primary" htmlType="submit"
            onClick={() => history.push("/SettingDriver")}> Setting
        </Button>

        </div>

      </div>
    </div>
  );
};
export default MenuDriver;