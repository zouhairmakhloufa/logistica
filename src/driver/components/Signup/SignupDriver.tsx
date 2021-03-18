import { Form, Input, Button } from "antd";
import { UserOutlined , FileImageTwoTone ,MailOutlined} from '@ant-design/icons';
import { useHistory } from "react-router-dom";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const SignupDriver = () => {
  const history = useHistory();

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="contentImage">
      <img src="/imageMain/imageMain2.jpg" className="imageAuth" />
      <div className="auth-signup-info">
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
            <Input placeholder="FirstName" style={{ width: "200%" }} prefix={<UserOutlined />} />

          </Form.Item>
           <Form.Item
            name="lastName"
            rules={[{ required: true, message: "Enter your lastName !" }]}
          >
            <Input placeholder="LastName" style={{ width: "200%" }} prefix={<UserOutlined />} />
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
            <Input style={{ width: "200%" }} placeholder="Email                                                 optionel" 
            prefix={<MailOutlined /> } />
          </Form.Item>

          <h2>Car Info</h2>
          <Form.Item
            name="CarInfo"
            rules={[{ required: true, message: "Enter your CarInfo !" }]}
          >
            <Input placeholder="Type Of Car" style={{ width: "200%" }} />
          </Form.Item>

          <h2>Car Photos</h2>
          <FileImageTwoTone />
          <h2>Id</h2>
          <FileImageTwoTone />
          <h2>Driving License</h2>
          <FileImageTwoTone />


          <Form.Item {...tailLayout}>
            <Button
              className="button-signup-info"
              type="primary"
              htmlType="submit"
              style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
              onClick={() => history.push("/Auth/homeDriver")} > Add{" "}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default SignupDriver;
