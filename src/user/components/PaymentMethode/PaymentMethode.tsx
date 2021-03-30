import { useHistory } from "react-router-dom";
import { LeftSquareOutlined } from "@ant-design/icons"
import { Button, Radio } from 'antd';
import { useState } from "react";
import "./PaymentMethode.scss";

const PaymentMethode = () => {
  const history = useHistory();
  const [value, setValue] = useState(1);

  const onChange = () => {
    setValue(value);
  };
  return (
    <div className="contentImage">
      <img src="/imagePaymentUser/PaymentUser.jpg" className="imageAuth" />
      <div className="auth-signup-info">
        <LeftSquareOutlined onClick={() => history.push("/TypeOfCars")} className="ClickRetour" /> <br></br> <br></br>
        <h3>  Payment Methode </h3>
        <br></br> <br></br>
        <Radio.Group onChange={onChange} value={value}>
          <Radio value={1}>Cache</Radio>
          <br></br>  <br></br>
          <Radio value={2}>Master Card /visa</Radio>
        </Radio.Group>
        <br></br>
        <Button className="button-TypeOfCars" type="primary" htmlType="submit"
          style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
          onClick={() => history.push("/AddPaymentMethod")}
        >
          Next{" "}
        </Button>
      </div>
    </div>
  );
};
export default PaymentMethode;
