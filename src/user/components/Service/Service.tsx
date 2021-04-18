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

        <h2 className="TitleService"> Service</h2>

        <div style={{ display: "flex" }} className="Delivery">
          <Checkbox defaultChecked disabled>
            <div style={{ display: "flex" }}>
              <p style={{ marginRight: "50px" }} className="aaa">
                Delivery
              </p>
              <h4 className="aaa">5 dt</h4>
            </div>
          </Checkbox>

          <Checkbox defaultChecked disabled>
            <div style={{ display: "flex" }}>
              <p style={{ marginRight: "50px" }} className="aaa">
                Boarding
              </p>
              <h4 className="aaa">5 dt</h4>
            </div>
          </Checkbox>
        </div>

        <Checkbox>
          <div style={{ display: "flex" }}>
            <p style={{ marginRight: "50px" }} className="aaa">
              Shipping
            </p>
            <h4 className="bbb">5 dt</h4>
          </div>
        </Checkbox>

        <h2> Packaging</h2>
        <div>
          <Radio.Group
            style={{ display: "grid" }}
            onChange={onChange}
            value={value}
          >
            <Radio value="Cartoon" className="Cartoon">
              Cartoon 3 dt
            </Radio>
            <Radio value="Plastic Roll">Plastic Roll 3 dt</Radio>
          </Radio.Group>
        </div>
        <div style={{ display: "flex" }} className="totalText">
          <h2 className="texttottalamountService">Total Amount</h2>
          <h4 className="TotalAmountService">18 dt</h4>
        </div>

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
