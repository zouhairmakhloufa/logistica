import { Form, Input, Button, } from 'antd';
import { useHistory } from "react-router-dom";
import { LeftSquareOutlined,MailOutlined } from "@ant-design/icons"
import "./signupEmail.scss"
//  map filter forEach reduce 
const SignupEmail = () => { 
   const history = useHistory();
    const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="contentImage">
      <img src="/imageAuth/imageAuth.jpg" className="imageAuth" />
      <div className="auth-signup-info">

        <LeftSquareOutlined onClick={() => history.push("/")} className="ClickRetour" />
        <h1>Sign-in </h1>
        <h4>Welcome back! </h4>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
        <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "The input is not valid email!",
              },
              {
                required: true,
                message: "input your E-mail !",
              },
            ]}
          >
            <Input style={{ width: "70%" }} placeholder="Enter your Email" prefix={<MailOutlined /> } />
          </Form.Item>
    
        <Form.Item >
          <Button className="button" type="primary" htmlType="submit"
            style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
            onClick={() => history.push("/Auth/SignupVeifCode")}> Continue </Button>
        </Form.Item>
        </Form>
      </div>
    </div>
  )
}
export default SignupEmail;
