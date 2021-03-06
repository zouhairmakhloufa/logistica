import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Form, Input, Button, Alert } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import axios from "axios";
import "./Signin.scss";

const Signin = () => {
  const history = useHistory();
  const [status, setStatus] = useState("");


  const onFinish = async (values: any) => {
    const result = await axios.post("http://localhost:5000/User/login", {
      email: values.email,
      password: values.password,
    });

    console.log("result", result);

    localStorage.setItem("token", result.data.token);
    localStorage.setItem("role", result.data.user.type);
    localStorage.setItem("userid", result.data.user._id);
    localStorage.setItem("userName", `${result.data.user.firstName} ${result.data.user.lastName}`);
    console.log("result.data.user", result.data.user);

    if (result.data.user.type === "driver") {
      window.location.replace("/HomeDriver");
    } else {
      window.location.replace("/mapInformation");
    }
    if (result.status === 200) {
      setStatus("succes");
    } else {
      setStatus("error");
    }
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="contentImage">
      <img src="/imageAuth/login2.jpg" className="imageAuth" />
      <div className="auth-signup-info">
        {status === "succes" && (
          <Alert message="successfully done" type="success" showIcon closable />
        )}
        {status === "error" && (
          <Alert message="Error" type="error" showIcon closable />
        )}
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
              { type: "email", message: "The input is not valid E-mail!" },
              { required: true, message: "Please input your E-mail!" },
            ]}
          >
            <Input
              placeholder="Enter your Email"
              style={{ width: "80%" }}
              prefix={<MailOutlined />}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
            hasFeedback
          >
            <Input.Password
              placeholder="Enter your Password"
              style={{ width: "80%" }}
              prefix={<LockOutlined />}
            />
          </Form.Item>

          <div style={{ display: "flex" }}>
            <h5 style={{ marginRight: "50px" }} className="NotYetRegister">
              Not yet register ?
            </h5>
            <a href="/Auth/SignUpUserOrDriver" className="Signup">
              {" "}
              Sign up
            </a>
          </div>
          <Form.Item>
            <Button
              className="button"
              type="primary"
              htmlType="submit"
              style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
              value="Submit"
            >
              {" "}
              Sign in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Signin;
