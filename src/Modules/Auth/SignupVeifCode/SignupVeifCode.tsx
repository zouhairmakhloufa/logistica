import { Form, Input, Button, } from 'antd';
import { useHistory } from "react-router-dom";
import { LeftSquareOutlined } from "@ant-design/icons"
//  map filter forEach reduce 

const SignupVeifCode = () => {
  const [form] = Form.useForm();
  const history = useHistory();

  return (
    <div className="contentImage">

      <img src="/imageAuth/imageAuth.jpg" className="imageAuth" />

      <div className="auth">
        <LeftSquareOutlined onClick={() => history.push("/Auth/signupEmail")} className="ClickRetour" />
        <h1>Verif code  </h1>

        <Form.Item name="password" label="Code"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password style={{ width: '70%' }} />
        </Form.Item>
        <Form.Item >
          <Button className="button" type="primary" htmlType="submit"
            style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
            onClick={() => history.push("/Auth/UserOrDriver")}> Continue </Button>
        </Form.Item>
      </div>
    </div>
  )
}
export default SignupVeifCode;
