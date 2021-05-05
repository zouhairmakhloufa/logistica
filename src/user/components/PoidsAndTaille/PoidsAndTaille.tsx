import { Button, InputNumber, Form } from "antd";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { LeftSquareOutlined } from "@ant-design/icons"
import BookinContext from "../../../context/booking";
import "./PoidsAndTaille.scss";

const PoidsAndTaille = () => {
  const history = useHistory();
  const {
    setPoids,
    setHauteur,
    setLargeur,
    setProfondeur,

    poids,
    hauteur,
    largeur,
    profondeur,
  }: any = useContext(BookinContext);
  console.log("poids :", poids);
  console.log("hauteur :", hauteur);
  console.log("largeur :", largeur);
  console.log("profondeur : ", profondeur);

  return (
    <div className="contentImage">
      <img src="/imageDimention/dimention bagage.jpg" className="imageAuth" />
      <div className="PoidsAndTaille">
        <LeftSquareOutlined onClick={() => history.push("/mapInformation")} className="ClickRetour" />

        <h3> Enter this information about your bag </h3>
        <br></br>
        <br></br>
        <div className="DimensionAndPois">
          <Form.Item label="Poids (en Kg):" className="input2k">
            <InputNumber min={1} max={2000} placeholder="max 2000" style={{ width: "40%" }}
              onChange={setPoids}
            />
          </Form.Item>

          <Form.Item label=" Hauteur (cm):" className="input2k">
            <InputNumber min={1} max={2000} placeholder="max 2000" style={{ width: "40%" }} 
            onChange={setHauteur} />
          </Form.Item>

          <Form.Item label=" Largeur (cm):" className="input2k">
            <InputNumber min={1} max={2000} placeholder="max 2000" style={{ width: "40%" }} 
             onChange={setLargeur} />
          </Form.Item>

          <Form.Item label=" Profondeur (cm):" className="inputProfondeur" >
            <InputNumber min={1} max={2000} placeholder="max 2000" style={{ width: "45%" }}
            onChange={setProfondeur} />
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
