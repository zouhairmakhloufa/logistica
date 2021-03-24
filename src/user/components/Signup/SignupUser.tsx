import { Form, Input, Button } from "antd";
import { UserOutlined , MailOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import { LeftSquareOutlined } from "@ant-design/icons"
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

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
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="firstName"
            rules={[{ required: true, message: "Enter your firstName !" }]}
          >
            <Input placeholder="Enter your firstName" style={{ width: "120%" }} prefix={<UserOutlined />} />

          </Form.Item>
           <Form.Item
            name="lastName"
            rules={[{ required: true, message: "Enter your lastName !" }]}
          >
            <Input placeholder="Enter your lastName" style={{ width: "120%" }} prefix={<UserOutlined />} />
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
            <Input style={{ width: "120%" }} placeholder="Enter your Email" prefix={<MailOutlined /> } />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button
              className="button-signup-info"
              type="primary"
              htmlType="submit"
              style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
              onClick={() => history.push("/Auth/mapInformation")}
            >
              Next{" "}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default SignupUser;
