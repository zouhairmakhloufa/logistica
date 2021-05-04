import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Alert } from "antd";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import { LeftSquareOutlined } from "@ant-design/icons";
import axios from "axios";
import "./SignupUser.scss";

const SignupUser = () => {
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = async (event: any) => {
    const registered = { firstName, lastName, email, password, confirmPassword, };
    const user = await axios.post(
      "http://localhost:5000/User/ajouter", registered);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    history.push("/mapInformation");
    <Alert message="Success Tips" type="success" showIcon />
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="contentImage">
      <img src="/imageAuth/imageAuth.jpg" className="imageAuth" />
      <div className="signup-info-User">
        <LeftSquareOutlined
          onClick={() => history.push("/Auth/SignUpUserOrDriver")}
          className="ClickRetour"
        />
        <h2>Add Your</h2>
        <Form
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
              placeholder="Enter your firstName"
              style={{ width: "70%" }}
              prefix={<UserOutlined />}
              onChange={(event) => setFirstName(event.target.value)}
              value={firstName}
            />
          </Form.Item>

          <Form.Item
            name="lastName"
            rules={[{ required: true, message: "Enter your lastName !" }]}
          >
            <Input
              placeholder="Enter your lastName"
              style={{ width: "70%" }}
              prefix={<UserOutlined />}
              onChange={(event) => setLastName(event.target.value)}
              value={lastName}
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              { type: "email", message: "The input is not valid E-mail!" },
              { required: true, message: "Please input your E-mail!" },
            ]}
          >
            <Input
              placeholder="Enter your Email"
              style={{ width: "70%" }}
              prefix={<MailOutlined />}
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
            hasFeedback
          >
            <Input.Password
              placeholder="Enter your Password"
              style={{ width: "70%" }}
              prefix={<LockOutlined />}
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
          </Form.Item>

          <Form.Item
            name="confirm"
            dependencies={["password"]}
            hasFeedback
            rules={[
              { required: true, message: "Please confirm your password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password
              placeholder="Please confirm your password!"
              style={{ width: "70%" }}
              prefix={<LockOutlined />}
              onChange={(event) => setConfirmPassword(event.target.value)}
              value={confirmPassword}
            />
          </Form.Item>
          <div style={{ display: "flex" }}>
            <h5
              style={{ marginRight: "50px" }}
              className="Already-have-an-account-Login"
            >
              Already have an account ?
            </h5>
            <a href="/Auth/Signin" className="Signup">
              {" "}
              Sign-in here
            </a>
          </div>
          <Form.Item>
            <Button
              className="button-signup-User"
              type="primary"
              htmlType="submit"
              style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
              value="Submit"
            >
              Add
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default SignupUser;
