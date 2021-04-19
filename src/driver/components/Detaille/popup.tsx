import { Form, Input, Button, Upload } from "antd";
import { UserOutlined, MailOutlined, LeftSquareOutlined, UploadOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import "./Detaille.scss";

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
      <img src="/imageAuth/imageAuth.jpg" className="imageAuthSignupDriver" />
      <div className="signup-info-driver">
        <LeftSquareOutlined
          onClick={() => history.push("/Auth/UserOrDriver")}
          className="ClickRetour"
        />{" "}
        <h2>Add Your</h2>
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
            <Input
              placeholder="FirstName"
              style={{ width: "100%" }}
              prefix={<UserOutlined />}
            />
          </Form.Item>
          <Form.Item
            name="lastName"
            rules={[{ required: true, message: "Enter your lastName !" }]}
          >
            <Input
              placeholder="LastName"
              style={{ width: "100%" }}
              prefix={<UserOutlined />}
            />
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
            <Input
              style={{ width: "100%" }}
              placeholder="Email"
              prefix={<MailOutlined />}
            />
          </Form.Item>
          <div className="carsInfo">
            <h3>Car Info</h3>
            <Form.Item
              name="CarInfo"
              rules={[{ required: true, message: "Enter your CarInfo !" }]}
            >
              <Input placeholder="Type Of Car" style={{ width: "100%" }} />
            </Form.Item>

            <h3>Car Photo</h3>
            <Upload>
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>

            <h3 className="h3Text">Id</h3>
            <Upload>
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>

            <h3 className="h3Text">Driving License</h3>
            <Upload>
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>

          </div>
          <Form.Item {...tailLayout}>
            <Button
              className="button-signup-info"
              type="primary"
              htmlType="submit"
              style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
              onClick={() => history.push("/HomeDriver")} >
              {" "}
              Add{" "}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default SignupDriver;
