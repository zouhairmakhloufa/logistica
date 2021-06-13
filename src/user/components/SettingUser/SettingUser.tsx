import { useEffect, useState } from "react";
import axios from "axios";
import { Form, Input, Button, Upload, Select } from "antd";
import { UserOutlined, MailOutlined, UploadOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { LeftSquareOutlined } from "@ant-design/icons";

import "./SettingUser.scss";
const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const SettingDriver = () => {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({
    firstName: "",
  });

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const result = await axios.get(
        `http://localhost:5000/User/users/${localStorage.getItem("userid")}`
      );
      setCurrentUser(result.data.user);
    };
    fetchCurrentUser();
  }, []);

  if (!currentUser) return <p>loading...</p>;
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 85 }}>
        <Option value="+216">+216</Option>
      </Select>
    </Form.Item>
  );
  console.log("dksjkdjskdjsk", currentUser);
  return (
    <div className="contentImage">
      <img src="/imageAuth/imageAuth.jpg" className="imageAuthSettingDriver" />
      <div className="setting-info-Driver">
        <LeftSquareOutlined
          onClick={() => history.push("/MenuDriver")}
          className="ClickRetour"
        />
        <div style={{ display: "flex" }}>
          <h2 style={{ marginRight: "50px" }} className="TextAccountBalence">
            Profile
          </h2>
          <h4 className="Edit">Edit</h4>
        </div>

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
              defaultValue={currentUser.firstName}
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
          <Form.Item
            name="phone"
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
          >
            <Input
              placeholder="Add your Phone Number"
              addonBefore={prefixSelector}
              style={{ width: "100%" }}
            />
          </Form.Item>
          <div className="carsInfo">
            <h3>Profile Photo</h3>
            <Upload>
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </div>
          <Form.Item {...tailLayout}>
            <Button
              className="button-SettingDriver"
              type="primary"
              htmlType="submit"
              style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
              onClick={() => history.push("/")}
            >
              {" "}
              Save{" "}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default SettingDriver;
