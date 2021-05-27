import { useContext } from "react";
import { Button, Select, Form } from "antd";
import { LeftSquareOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import BookinContext from "../../../context/booking";
import "./Service.scss";

const { Option } = Select;

const Service = () => {
  const history = useHistory();

  const {
    setService,
    setPackaging,
    setPriceService,
    setPricePackaging,

    priceService,
    pricePackaging,
    service,
    packaging }: any = useContext(BookinContext);

  const onSubmit = async (event: any) => {
    const registered = {
      service,
      packaging,
    };
    history.push("/PaymentMethode");
  };
  const LesServices = [
    { services: "Shipping 5 dt",  priceService: 15 },
  ];

  const selectedService = LesServices.find(
    (item) =>
      (item.services === service ) 
  );
  console.log("service", selectedService);


  const LesPackaging = [
    { packaging: "Cartoon 3 dt",  pricePackaging: 3 },
    { packaging: "Plastic Roll 3 dt",  pricePackaging: 3 },

  ];

  const selectedPackaging = LesPackaging.find(
    (item) =>
      (item.packaging === packaging ) 
  );
  console.log("packaging", selectedPackaging);


  return (
    <div className="contentImage">
      <img src="/imageAuth/imageAuth.jpg" className="imageAuth" />
      <div className="Service">
        <LeftSquareOutlined
          onClick={() => history.push("/TypeOfCars")}
          className="CickRetourService"
        />
        <h3>price service : {selectedService?.priceService} dt </h3> 
        <h3 className="text">price Packaging : {selectedPackaging?.pricePackaging} dt </h3> 


        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onSubmit}
        >
           <h2 className="TitleService"> Service</h2>
          <Select
            defaultValue="Shipping "
            style={{ width: 140, height: 35 }}
            bordered={false}
            className="SelectPaymentMethode"
            onChange={setService}
          >
            <Option value="Shipping 5 dt"> Shipping 5 dt</Option>
            <Option value="Delivery 5 dt" disabled>  {" "} Delivery 5 dt </Option>
            <Option value="Boarding 5 dt" disabled>  {" "} Boarding 5 dt </Option>
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
              <Option value="Plastic Roll 3 dt">Plastic Roll 3 dt</Option>
            </Select>
          </div>

          <Button
            className="button-Service"
            type="primary"
            htmlType="submit"
            style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
            value="Submit" 
            onClick={() => {
              setPriceService(selectedService?.priceService);
              setPricePackaging(selectedPackaging?.pricePackaging);

            }}>
            Continue{" "}
          </Button>
        </Form>
      </div>
    </div>
  );
};
export default Service;
