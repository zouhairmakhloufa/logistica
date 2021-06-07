import { useState } from "react";
import { Alert } from "antd";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Select } from "antd";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import axios from "axios";
import "./SignupUser.scss";
const { Option } = Select;
const SignupUser = () => {
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [numDeTelf, setNumDeTelf] = useState("");
  const [status, setStatus] = useState("");

  const onSubmit = async (event: any) => {
    const registered = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      type: "user",
      numDeTelf,
    };
    try {
      const user = await axios.post(
        "http://localhost:5000/User/signup",
        registered
      );

      console.log("user", user);

      if (user.status === 200) {
        setStatus("succes");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setNumDeTelf("");
    // history.push("/Auth/Signin");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 85 }}>
        <Option value="+216">+216</Option>
      </Select>
    </Form.Item>
  );
  return (
    <div className="contentImage">
      <img src="/imageAuth/imageAuth.jpg" className="imageAuth" />
      <div className="signup-info-User">
        {status === "succes" && (
          <Alert message="Success singjsdkjhskdjskd" type="success" showIcon />
        )}
        {status === "error" && (
          <Alert
            message="Error"
            description="This is an error message about copywriting."
            type="error"
            showIcon
          />
        )}
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onSubmit}
          onFinishFailed={onFinishFailed}
        >
          <h2> Create your account </h2>
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
          <Form.Item
            name="phone"
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
          >
            <Input
              placeholder="Add your Phone Number"
              addonBefore={prefixSelector}
              style={{ width: "70%" }}
              onChange={(event) => setNumDeTelf(event.target.value)}
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
