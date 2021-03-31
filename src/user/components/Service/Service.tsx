import { useState } from "react";
import { Button, Checkbox, Radio } from "antd";
import { LeftSquareOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import "./Service.scss";

const Service = () => {
  const history = useHistory();
  const [value, setValue] = useState("Cartoon");

  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <div className="contentImage">
      <img src="/imageAuth/imageAuth.jpg" className="imageAuth" />
      <div className="Service">
        <LeftSquareOutlined
          onClick={() => history.push("/TypeOfCars")}
          className="ClickRetour"
        />
        <br></br>
        <br></br>
        <h2 className="TitleService"> Service</h2>
        <Checkbox defaultChecked disabled>
          {" "}
          Delivery
        </Checkbox>{" "}
        <h4 className="prixservice">5 dt</h4>
        <Checkbox defaultChecked disabled>
          {" "}
          Boarding
        </Checkbox>{" "}
        <h4 className="prixservice">3 dt</h4>
        <Checkbox>Shipping</Checkbox> <h4 className="prixservice">5 dt</h4>
        <br></br>
        <h3> Packaging</h3>
        <Radio.Group onChange={onChange} value={value}>
          <Radio value="Cartoon">Cartoon</Radio>{" "}
          <h4 className="prixservice">3 dt</h4>
          <Radio value="Plastic Roll">Plastic Roll</Radio>{" "}
          <h4 className="prixservice">3 dt</h4>
        </Radio.Group>
        <br></br>
        <h3> Total Amount</h3> <h4 className="prixservice">20 dt</h4>
        <Button
          className="button-Service"
          type="primary"
          htmlType="submit"
          style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
          onClick={() => history.push("/PaymentMethode")}
        >
          Continue{" "}
        </Button>
      </div>
    </div>
  );
};
export default Service;
