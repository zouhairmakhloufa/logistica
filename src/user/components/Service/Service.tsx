import { Button, Checkbox ,Radio } from "antd";
import { LeftSquareOutlined } from "@ant-design/icons"
import { useHistory } from "react-router-dom";

const Service = () => {
  const history = useHistory();
  return (
    <div className="contentImage">
       <img src="/imageAuth/imageAuth.jpg" className="imageAuth" />
      <div className="Service">

        <LeftSquareOutlined onClick={() => history.push("/TypeOfCars")}  className="ClickRetour"/> 
        <br></br>
        <br></br>
      
        <h3> Service</h3>        
        <Checkbox defaultChecked disabled> Delivery</Checkbox>   <h4 className="prixservice">5 dt</h4>
        <Checkbox defaultChecked disabled> Boarding</Checkbox> <h4 className="prixservice">3 dt</h4> 
        <Checkbox >Shipping</Checkbox>   <h4 className="prixservice">5 dt</h4>  
        <br></br>

        <h3> Packaging</h3>        
        <Radio >Cartoon</Radio> <h4 className="prixservice">3 dt</h4> 
        <br></br>

        <h3> Total Amount</h3>          <h4 className="prixservice">8 dt</h4>

        <Button className="button-Next-poids" type="primary" htmlType="submit"
          style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
          onClick={() => history.push("/BookingSuccessful")}
        >
          Continue{" "}
        </Button>
      </div>
    </div>
  );
};
export default Service;