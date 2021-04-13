import { Form, Input, Button, Upload } from "antd";
import { UserOutlined, MailOutlined, UploadOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import { LeftSquareOutlined } from "@ant-design/icons"
import "./SettingDriver.scss";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const SettingDriver = () => {
  const history = useHistory();

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="contentImage">
      <img src="/imageAuth/imageAuth.jpg" className="imageAuthSettingDriver" />
      <div className="signup-info-driver">
        <LeftSquareOutlined onClick={() => history.push("/MenuDriver")} className="ClickRetour" /> <h2>Profile</h2>

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
            <Input placeholder="FirstName" style={{ width: "100%" }} prefix={<UserOutlined />} />

          </Form.Item>
          <Form.Item name="lastName" rules={[{ required: true, message: "Enter your lastName !" }]} >
            <Input placeholder="LastName" style={{ width: "100%" }} prefix={<UserOutlined />} />
          </Form.Item>

          <Form.Item name="email"
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
            <Input style={{ width: "100%" }} placeholder="Email"
              prefix={<MailOutlined />} />
          </Form.Item>
          <div className="carsInfo">
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

          <div style={{ display: "flex" }} >
            <h2 style={{ marginRight: "50px" }} className="TextAccountBalence">Account balance</h2>
            <h4 className="TotalAmount">350 R. S.</h4>
          </div>

          <div style={{ display: "flex" }} >
            <h2 style={{ marginRight: "50px" }}>Payment</h2>
          </div>
          <a href="/" className="logOut"> Log out</a>
          <Form.Item {...tailLayout}>
            <Button
              className="button-SettingDriver"
              type="primary"
              htmlType="submit"
              style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
              onClick={() => history.push("/HomeDriver")}> Add{" "}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default SettingDriver;
