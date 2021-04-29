import { Form, Input, Button } from "antd";
import { UserOutlined, MailOutlined, LeftSquareOutlined, LockOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./SignupDriver.scss";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const SignupDriver = () => {
  const history = useHistory();
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [TypeOfCars, setTypeOfCars] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    const registered = { FirstName, LastName, Email, Password, ConfirmPassword };
    const user = await axios.post(
      "http://localhost:5000/User/ajouter", registered);

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setTypeOfCars("");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="contentImage">
      <img src="/imageAuth/imageAuth.jpg" className="imageAuthSignupDriver" />
      <div className="signup-info-driver">
        <LeftSquareOutlined onClick={() => history.push("/Auth/SignUpUserOrDriver")}
          className="ClickRetourSignupDriver" />{" "}
        <h2>Add Your</h2>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onSubmit}
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
              onChange={(event) => setFirstName(event.target.value)}
              value={FirstName}
            />
          </Form.Item>
          <Form.Item name="lastName"
            rules={[{ required: true, message: "Enter your lastName !" }]}
          >
            <Input
              placeholder="LastName"
              style={{ width: "100%" }}
              prefix={<UserOutlined />}
              onChange={(event) => setLastName(event.target.value)}
              value={LastName}
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
              onChange={(event) => setEmail(event.target.value)}
              value={Email}
            />
          </Form.Item>
          <Form.Item
            name="password"

            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password
              placeholder="Enter your Password"
              style={{ width: "100%" }}
              prefix={<LockOutlined />}
              onChange={(event) => setPassword(event.target.value)}
              value={Password}
            />
          </Form.Item>

          <Form.Item
            name="confirm"

            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
              }),
            ]}
          >
            <Input.Password
              placeholder="Please confirm your password!"
              style={{ width: "100%" }}
              prefix={<LockOutlined />}
              onChange={(event) => setConfirmPassword(event.target.value)}
              value={ConfirmPassword}
            />

          </Form.Item>
          <div className="carsInfo">
            <h3>Type Of Car</h3>
            <Form.Item
              name="CarInfo"
              rules={[{ required: true, message: "Enter your CarInfo !" }]}
            >
              <Input
                placeholder="exemple Golf"
                style={{ width: "100%" }}
                onChange={(event) => setTypeOfCars(event.target.value)}
                value={TypeOfCars} />

            </Form.Item>
          </div>
          <div style={{ display: "flex" }} >
            <h5 style={{ marginRight: "50px" }} className="Already-have-an-account-Login">Already have an account ?</h5>
            <a href="/Auth/Signin" className="Signup"> Sign-in here</a>
          </div>
          <Form.Item {...tailLayout}>
            <Button
              className="button-signup-info"
              type="primary"
              htmlType="submit"
              style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
              onClick={() => history.push("/HomeDriver")}
              value="Submit" >
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
