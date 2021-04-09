import { useState } from "react";
import { Form, Button } from "antd";
import { useHistory } from "react-router-dom";
import { LeftSquareOutlined } from "@ant-design/icons";
import InputCode from "./InputCode";
import "./SignupVeifCode.scss";
//  map filter forEach reduce

const SignupVeifCode = () => {
  const [form] = Form.useForm();
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  return (
    <div className="contentImage">
      <img src="/imageAuth/imageAuth.jpg" className="imageAuth" />
      <div className="auth-signup-info">
        <LeftSquareOutlined
          onClick={() => history.push("/Auth/signupEmail")}
          className="ClickRetour"
        />
        <h1>Verif code </h1>
        <InputCode
          length={4}
          label="Entrer the 4 digit code "
          loading={loading}
          onComplete={(code: string) => {
            console.log("code", code);
            setLoading(true);
          }}
        />
        <Form.Item>
          <Button
            className="buttonVerifCode"
            type="primary"
            htmlType="submit"
            style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
            onClick={() => history.push("/Auth/UserOrDriver")}
          >
            {" "}
            Continue{" "}
          </Button>
        </Form.Item>
        <InputCode
          length={4}
          label="Code Label"
          loading={loading}
          onComplete={(code: string) => {
            console.log("code", code);
            setLoading(true);
          }}
        />{" "}
      </div>
    </div>
  );
};
export default SignupVeifCode;
