import { useHistory } from "react-router-dom";
import { LeftSquareOutlined } from "@ant-design/icons"
import { Button, Radio } from 'antd';
import { useState } from "react";
import "./PaymentMethode.scss";

const PaymentMethode = () => {
  const history = useHistory();
  const [value, setValue] = useState("Cache");

  const onChange = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <div className="contentImage">
      <img src="/imagePaymentUser/PaymentUser.jpg" className="imageAuth" />
      <div className="PaymentMethode">
        <LeftSquareOutlined onClick={() => history.push("/Service")} className="ClickRetourPaymentMethode" /> 
        <h2 className="text">  Payment Methode </h2>
        <div className="MethodePayment">
        <Radio.Group onChange={onChange} value={value}>
          <Radio value="Cache" className="Cartoon">Cache</Radio>{" "}  <br></br>
          <Radio value="Card" defaultChecked disabled>Card</Radio>{" "}   
        </Radio.Group>
        </div>
   
        <Button className="buttonPaymentMethode" type="primary" htmlType="submit"
          style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
          onClick={() => history.push("/NoteToDriver")}
        >
          Next{" "}
        </Button>
      </div>
    </div>
  );
};
export default PaymentMethode;
