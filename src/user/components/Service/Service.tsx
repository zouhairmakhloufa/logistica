import { useContext } from "react";
import { Button, Select, Form } from "antd";
import { LeftSquareOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import BookinContext from "../../../context/booking";
import axios from "axios";
import "./Service.scss";
const { Option } = Select;

const Service = () => {
  const history = useHistory();

  const { setService, setPackaging, service, packaging }: any = useContext(
    BookinContext
  );
  console.log("service  :", service);
  console.log("packaging :", packaging);

  const onSubmit = async (event: any) => {
    const registered = {
      service,
      packaging,
    };
    history.push("/PaymentMethode");
  };
  return (
    <div className="contentImage">
      <img src="/imageAuth/imageAuth.jpg" className="imageAuth" />
      <div className="Service">
        <LeftSquareOutlined
          onClick={() => history.push("/TypeOfCars")}
          className="CickRetourService"
        />

        <h2 className="TitleService"> Service</h2>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onSubmit}
        >
          <Select
            defaultValue="Shipping "
            style={{ width: 140, height: 35 }}
            bordered={false}
            className="SelectPaymentMethode"
            onChange={setService}
          >
            <Option value="Shipping 5 dt"> Shipping 5 dt</Option>
            <Option value="Delivery 5 dt" disabled>
              {" "}
              Delivery 5 dt
            </Option>
            <Option value="Boarding 5 dt" disabled>
              {" "}
              Boarding 5 dt
            </Option>
          </Select>

          <h2 className="TitleService"> Packaging</h2>
          <div>
            <Select
              defaultValue="Cartoon"
              style={{ width: 140, height: 35 }}
              bordered={false}
              className="SelectPaymentMethode"
              onChange={setPackaging}
            >
              <Option value="Cartoon 3 dt"> Cartoon 3 dt</Option>
              <Option value="Plastic Roll 3 dt"> Plastic Roll 3 dt</Option>
            </Select>
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
            value="Submit"
          >
            {" "}
            Continue{" "}
          </Button>
        </Form>
      </div>
    </div>
  );
};
export default Service;
