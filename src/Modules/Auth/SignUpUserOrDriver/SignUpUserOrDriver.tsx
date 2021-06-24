import { Button } from 'antd';
import { useHistory } from "react-router-dom";
import { LeftSquareOutlined } from "@ant-design/icons"
import "./SignUpUserOrDriver.scss"

const SignUpUserOrDriver = () => {
    const history = useHistory();

    return (
        <div className="contentImage">
            <img src="/imageAuth/imageAuth.jpg" className="imageAuth" />

            <div className="auth-signup-info">
              
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
export default SignUpUserOrDriver;