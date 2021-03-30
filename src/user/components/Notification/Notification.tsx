import { useHistory } from "react-router-dom";
import { LeftSquareOutlined } from "@ant-design/icons"
import "./Notification.scss";

const Cancled = () => {
  const history = useHistory();
  return (
    <div className="contentImage">
      <img src="/imageAuth/imageAuth.jpg" className="imageAuth" />
      <div className="auth-signup-info">
        <LeftSquareOutlined onClick={() => history.push("/Menu")} className="ClickRetour" />
        <br></br> <br></br>
      
       <h3> Adem Ragheb</h3>

      </div>
    </div>
  );
};
export default Cancled;
