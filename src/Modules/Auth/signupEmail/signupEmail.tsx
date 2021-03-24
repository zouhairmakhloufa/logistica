import { Form, Input, Button, } from 'antd';
import { useHistory } from "react-router-dom";
import { LeftSquareOutlined } from "@ant-design/icons"
//  map filter forEach reduce 
const SignupEmail = () => { 
   const history = useHistory();

  return (
    <div className="contentImage">
      <img src="/imageAuth/imageAuth.jpg" className="imageAuth" />
      <div className="auth">

        <LeftSquareOutlined onClick={() => history.push("/dashbord")} className="ClickRetour" />
        <h1>Sign-in </h1>
        <h4>Welcome back! </h4>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input style={{ width: '50%' }} />
        </Form.Item>
        <Form.Item >
          <Button className="button" type="primary" htmlType="submit"
            style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
            onClick={() => history.push("/Auth/SignupVeifCode")}> Next </Button>
        </Form.Item>

      </div>
    </div>
  )
}
export default SignupEmail;
