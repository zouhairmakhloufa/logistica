import { Button, InputNumber, Form } from "antd";
import { useHistory } from "react-router-dom";
import { LeftSquareOutlined } from "@ant-design/icons"
import "./PoidsAndTaille.scss";


const PoidsAndTaille = () => {
  const history = useHistory();
  return (
    <div className="contentImage">
      <img src="/imageDimention/dimention bagage.jpg" className="imageAuth" />
      <div className="PoidsAndTaille">
      <LeftSquareOutlined  onClick={() => history.push("/mapInformation")} className="ClickRetour"/>

        <h3> Enter this information about your bag </h3>
        <br></br>
        <br></br>
        <div className="DimensionAndPois">
          <Form.Item label="Poids (en Kg):"  className="input2k">
            <InputNumber min={1} max={2000} placeholder="max 2000" style={{ width: "40%" }} />
          </Form.Item>

          <Form.Item label=" Hauteur (cm):"  className="input2k">
            <InputNumber min={1} max={2000} placeholder="max 2000" style={{ width: "40%" }} />
          </Form.Item>

          <Form.Item label=" Largeur (cm):" className="input2k">
            <InputNumber min={1} max={2000} placeholder="max 2000" style={{ width: "40%" }} />
          </Form.Item>

          <Form.Item label=" Profondeur (cm):" className="inputProfondeur" >
            <InputNumber min={1} max={2000} placeholder="max 2000" style={{ width: "45%" }} />
          </Form.Item>
        </div>

        <Button className="button-Next-poids" type="primary" htmlType="submit"
          style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
          onClick={() => history.push("/TypeOfCars")}

        > Next{" "}
        </Button>
      </div>
    </div>
  );
};
export default PoidsAndTaille;
