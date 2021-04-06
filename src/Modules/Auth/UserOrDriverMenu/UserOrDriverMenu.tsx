import { Button } from 'antd';
import { useHistory } from "react-router-dom";
import { LeftSquareOutlined } from "@ant-design/icons"
import "./UserOrDriverMenu.scss"

const UserOrDriverMenu = () => {
    const history = useHistory();

    return (
        <div className="contentImage">
            <img src="/imageAuth/imageAuth.jpg" className="imageAuth" />

            <div className="auth-signup-info">
                <LeftSquareOutlined onClick={() => history.push("/")} className="ClickRetour" />
                <h1>
                    Do you want to Subscribe as
                </h1>
                <h1>  User or Driver? </h1>

                <Button className="button" type="primary" htmlType="submit"
                    style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
                    onClick={() => history.push("/MenuUser")}>
                    User
                </Button>
                <br></br>
                <Button className="button" type="primary" htmlType="submit"
                    style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
                    onClick={() => history.push("/MenuDriver")}>
                    Driver
                </Button>

            </div>
        </div>
    )
}
export default UserOrDriverMenu;
