import { useHistory } from "react-router-dom";
import { LeftSquareOutlined } from "@ant-design/icons"
import { Button, InputNumber } from 'antd';
import { useState } from "react";
import { CreditCardOutlined } from "@ant-design/icons"
import "./AddPaymentMethod.scss";

const AddPaymentMethod = () => {
  const history = useHistory();
  const [value, setValue] = useState(1);

  const onChange = () => {
    setValue(value);
  };
  return (
    <div className="contentImage">
      <img src="/imagePaymentUser/PaymentUser.jpg" className="imageAuth" />
      <div className="auth-signup-info">
        <LeftSquareOutlined onClick={() => history.push("/PaymentMethode")} className="ClickRetour" /> <br></br> <br></br>
        <h2>Add a payment method </h2>
        <CreditCardOutlined style={{ fontSize: '20px', color: '#08c' }} />
        <InputNumber min={1} max={16} defaultValue={3} onChange={onChange} className="inputNumberCardVisa" />
        <br></br> <br></br>
        <Button className="button-TypeOfCars" type="primary" htmlType="submit"
          style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
          onClick={() => history.push("/Service")}
        >
          Add Card{" "}
        </Button>
      </div>
    </div>
  );
};
export default AddPaymentMethod;
