import { useHistory } from "react-router-dom";
import { LeftSquareOutlined } from "@ant-design/icons"
import { Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import "./SettingUser.scss";

const SettingUser = () => {
  const history = useHistory();
  return (
    <div className="contentImage">
      <img src="/imageAuth/imageAuth.jpg" className="imageAuth" />
      <div className="auth-signup-info">
        <LeftSquareOutlined onClick={() => history.push("/MenuUser")} className="ClickRetour" />
        <br></br> 
        <h2>Setting </h2>
        <br></br> <br></br>
        <Avatar size={50} icon={<UserOutlined />} className="iconsImageProfile" /> <h3> Maram Sayma</h3> 
        <br></br> <br></br>
     
        <Button className="ButtonMenu" type="primary" htmlType="submit"
          onClick={() => history.push("/ContactUs")} > Contact us{" "}
        </Button> <br></br> <br></br>

        <Button className="ButtonMenu" type="primary" htmlType="submit"
          onClick={() => history.push("/ ClearCache")}> Clear cache{" "}
        </Button>
      </div>
    </div>
  );
};
export default SettingUser;
