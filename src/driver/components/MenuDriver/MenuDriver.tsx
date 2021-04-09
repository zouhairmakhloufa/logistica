import { LeftSquareOutlined } from "@ant-design/icons"
import { Button } from "antd";
import { useHistory } from "react-router-dom";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { CarOutlined, NotificationOutlined, CreditCardOutlined, SettingOutlined } from "@ant-design/icons"
import "./MenuDriver.scss";

const MenuDriver = () => {
  const history = useHistory();

  return (
    <div className="contentImage">
      <img src="/imageAuth/imageAuth.jpg" className="imageAuth" />

      <div className="auth-Menu">
        <LeftSquareOutlined onClick={() => history.push("/Auth/UserOrDriverMenu")} className="ClickRetourMenu" />
        <Avatar size={90} icon={<UserOutlined />} className="iconsImageProfile" />
        <h2> Zouhair Makhloufa </h2>
        <br></br>
        <CarOutlined /> <Button className="ButtonMenu" type="primary" htmlType="submit"
          onClick={() => history.push("/HomeDriver")}> Home{" "}
        </Button> <br></br> <br></br>

        <CarOutlined /> <Button className="ButtonMenu" type="primary" htmlType="submit"
          onClick={() => history.push("/OrdersDriver")}> Mytrip{" "}
        </Button> <br></br> <br></br>

        <CreditCardOutlined /> <Button className="ButtonMenu" type="primary" htmlType="submit"
          onClick={() => history.push("/PaymentDriver")}> Payment{" "}
        </Button> <br></br> <br></br>

        <SettingOutlined /><Button className="ButtonMenu" type="primary" htmlType="submit"
          onClick={() => history.push("/SettingDriver")}> Setting{" "}
        </Button>

      </div>
    </div>
  );
};
export default MenuDriver;