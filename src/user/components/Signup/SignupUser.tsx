import { Form, Input, Button } from "antd";
import { UserOutlined , MailOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import { LeftSquareOutlined } from "@ant-design/icons"
import "./SignupUser.scss";


const SignupUser = () => {
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
      <LeftSquareOutlined  onClick={() => history.push("/Auth/UserOrDriver")} className="ClickRetour"/>

        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="firstName"
            rules={[{ required: true, message: "Enter your firstName !" }]}
          >
            <Input placeholder="Enter your firstName" style={{ width: "70%" }} prefix={<UserOutlined />} />
          </Form.Item>
          
           <Form.Item
            name="lastName"
            rules={[{ required: true, message: "Enter your lastName !" }]}
          >
            <Input placeholder="Enter your lastName" style={{ width: "70%" }} prefix={<UserOutlined />} />
          </Form.Item>
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
            <Button
              className="button-signup-User"
              type="primary"
              htmlType="submit"
              style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
              onClick={() => history.push("/mapInformation")}
            >
              Continue{" "}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default SignupUser;
