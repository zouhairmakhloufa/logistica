import { Button } from 'antd';
import { useHistory } from "react-router-dom";
import { LeftSquareOutlined } from "@ant-design/icons"
import "./UserOrDriver.scss"

const UserOrDriver = () => {
    const history = useHistory();
    
    return (
        <div className="contentImage">
            <img src="/imageAuth/imageAuth.jpg" className="imageAuth" />

            <div className="auth-signup-info">
            <LeftSquareOutlined  onClick={() => history.push("/Auth/SignupVeifCode")} className="ClickRetour"/>
                <h1> 
                Do you want to Subscribe as
                </h1>
                <h1>  User or Driver? </h1>

                <Button className="button" type="primary" htmlType="submit"
                    style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
                    onClick={() => history.push("/Auth/SignupUser")}>
                    User
                </Button>
                <br></br>
                <Button className="button" type="primary" htmlType="submit"
                    style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
                    onClick={() => history.push("/Auth/SignupDriver")}>
                    Driver
                </Button>

            </div>
        </div>
    )
}
export default UserOrDriver;
