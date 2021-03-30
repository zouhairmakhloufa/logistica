import { Button} from "antd";
import { useHistory } from "react-router-dom";
import { LeftSquareOutlined } from "@ant-design/icons"
import {DollarOutlined,CreditCardOutlined} from "@ant-design/icons"
import "./PaymentUser.scss";

const PaymentUser = () => {
  const history = useHistory();
  return (
    <div className="contentImage">
      <img src="/imagePaymentUser/PaymentUser.jpg" className="imageAuth" />
      <div className="auth-signup-info">
      <LeftSquareOutlined  onClick={() => history.push("/Menu")} className="ClickRetour"/> <br></br> <br></br> 
       <h3>  Methode Cach </h3>
       
       <DollarOutlined  style={{ fontSize: '22px', color: '#08c' }} /> <Button className="ButtonMenu" type="primary" htmlType="submit"
          onClick={() => history.push("")}> Cach{" "}
        </Button> <br></br> <br></br>  <br></br>
       <h3> Methode Credit Card  </h3>  

       <CreditCardOutlined style={{ fontSize: '20px', color: '#08c' }}/> <Button className="ButtonMenu" type="primary" htmlType="submit"
          onClick={() => history.push("")}> **** **** **** 5967{" "}
        </Button>
        <br></br> <br></br>
       <Button className="ButtonPaymentUser" type="primary" htmlType="submit"
          style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
          onClick={() => history.push("")}

        > Next{" "}
        </Button>
      </div>
    </div>
  );
};
export default PaymentUser;
