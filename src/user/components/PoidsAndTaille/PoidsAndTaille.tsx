import { Button, InputNumber, Form } from "antd";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { LeftSquareOutlined } from "@ant-design/icons";
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
  console.log("weight :", poids);
  console.log("height :", hauteur);
  console.log("width :", largeur);
  console.log("depth : ", profondeur);

  const onSubmit = async (event: any) => {
    history.push("/TypeOfCars")
  };

  return (
    <div className="contentImage">
      <img src="/imageDimention/dimention bagage.jpg" className="imageAuth" />
      <div className="PoidsAndTaille">
        <LeftSquareOutlined
          onClick={() => history.push("/mapInformation")}
          className="ClickRetour"
        />

        <h3 className="Enter_this_information_about_your_bag"> Enter this information about your bag </h3>
        <div className="DimensionAndPois">
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onSubmit}
          >
            <Form.Item label="weight (Kg):" className="input2k">
              <InputNumber
                min={1}
                max={2000}
                placeholder="max 2000"
                style={{ width: "40%" }}
                onChange={setPoids}
              />
            </Form.Item>

            <Form.Item label=" height (cm):" className="input2k">
              <InputNumber
                min={1}
                max={2000}
                placeholder="max 2000"
                style={{ width: "40%" }}
                onChange={setHauteur}
              />
            </Form.Item>

            <Form.Item label=" width (cm):" className="input2k">
              <InputNumber
                min={1}
                max={2000}
                placeholder="max 2000"
                style={{ width: "40%" }}
                onChange={setLargeur}
                className="widthInput"
              />
            </Form.Item>

            <Form.Item label="depth (cm):" className="input2k">
              <InputNumber
                min={1}
                max={2000}
                placeholder="max 2000"
                style={{ width: "41%" }}
                onChange={setProfondeur}
                className="depthInput"
              />
            </Form.Item>

            <Button
              className="button-Next-poids"
              type="primary"
              htmlType="submit"
              style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
            >   {" "} Next{" "}
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default PoidsAndTaille;
