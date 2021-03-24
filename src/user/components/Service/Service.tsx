import { Button, Checkbox ,Radio } from "antd";
import { LeftSquareOutlined } from "@ant-design/icons"
import { useHistory } from "react-router-dom";

const Service = () => {
  const history = useHistory();
  return (
    <div className="contentImage">
       <img src="/imageAuth/imageAuth.jpg" className="imageAuth" />
      <div className="Service">

        <LeftSquareOutlined onClick={() => history.push("/Auth/TypeOfCars")}  className="ClickRetour"/> <br></br>
        <h2> Service</h2>
        <Checkbox defaultChecked disabled> Delivery</Checkbox> <br></br>
        <Checkbox defaultChecked disabled> Boarding</Checkbox> <br></br>
        <Checkbox >Shipping</Checkbox>
        <br></br>
        <br></br>
        <h2> Packaging</h2>
        <Radio >Cartoon</Radio> <br></br>
        <Radio >Plastic</Radio><br></br>

        <Button className="button-Next-poids" type="primary" htmlType="submit"
          style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
          onClick={() => history.push("/Auth/Service")}
        >
          Continue{" "}
        </Button>
      </div>
    </div>
  );
};
export default Service;
