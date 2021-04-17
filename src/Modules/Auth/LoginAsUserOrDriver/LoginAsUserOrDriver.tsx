import { Button } from 'antd';
import { useHistory } from "react-router-dom";
import { LeftSquareOutlined } from "@ant-design/icons"
import "./LoginAsUserOrDriver.scss"

const LoginAsUserOrDriver = () => {
    const history = useHistory();

    return (
        <div className="contentImage">
            <img src="/imageAuth/imageAuth.jpg" className="imageAuth" />

            <div className="auth-signup-info">
                <LeftSquareOutlined onClick={() => history.push("/")} className="ClickRetour" />
                <h1>  Do you want to login as a </h1>
                <h1>  User or Driver? </h1>
                <Button className="button" type="primary" htmlType="submit"
                    style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
                    onClick={() => history.push("/mapInformation")}>
                    User
                </Button>
                <br></br>
                <Button className="button" type="primary" htmlType="submit"
                    style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
                    onClick={() => history.push("/HomeDriver")}>
                    Driver
                </Button>

            </div>
        </div>
    )
}
export default LoginAsUserOrDriver;
