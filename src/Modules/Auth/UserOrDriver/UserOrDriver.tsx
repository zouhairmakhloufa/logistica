import { Button } from 'antd';
import { useHistory } from "react-router-dom";


const UserOrDriver = () => {

    const history = useHistory();


    return (
        <div className="contentImage">

            <img src="/imageMain/imageMain2.jpg" className="imageAuth" />

            <div className="auth">
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
