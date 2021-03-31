import { Button, } from 'antd';
import { useHistory } from "react-router-dom";
import "./Main.scss"

const Main = () => {
    const history = useHistory();

    return (
        <div className="welcome" >
            <h1> Welcome to Logistica   </h1>
            <h4>logistica is a dynamic website that connects customers who have luggage to transmit with carriers</h4>
            <Button className="button" type="primary" htmlType="submit"
                style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
                onClick={() => history.push("/Auth/SignupEmail")}> Start Now </Button>
        </div>
    );
}
export default Main;

