import { Input } from 'antd';
import { MailOutlined } from "@ant-design/icons"
import { useHistory } from "react-router-dom";

const MyProfile = () => {
  const history = useHistory();

  return (
    <div className="contentImage">
      <img src="/imageAuth/imageAuth.jpg" className="imageAuth" />
      <div className="Service">

        <h1> Profile  </h1> <br></br>  <br></br> <br></br> <br></br>

        <h3> First Name</h3>
        <Input />
        <h3> last Name</h3>
        <Input />
        <h3> Email </h3>
        <Input style={{ width: '70%' }} prefix={<MailOutlined />} />







      </div>
    </div>
  );
};
export default MyProfile;

