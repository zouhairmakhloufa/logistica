import { Button } from "antd";
import { useHistory } from "react-router-dom";
import "./Main.scss";

const Main = () => {
  const history = useHistory();

  return (
    <div className="DashboardImage">
      <div className="TextDashbord">
        <h1> Welcome to Logistica </h1>
        <h4>
          logistica is a dynamic website that connects customers who have
          luggage to transmit with carriers
        </h4>
        <Button
          className="buttonJoinUs"
          type="primary"
          htmlType="submit"
          onClick={() => history.push("/Auth/Signin")}
        >
          {" "}
          Join Logistica{" "}
        </Button>
      </div>
    </div>
  );
};
export default Main;
