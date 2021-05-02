import { Form, Input, Button } from "antd";
import { useHistory } from "react-router-dom";
import { LeftSquareOutlined, MailOutlined, LockOutlined, } from "@ant-design/icons";
import axios from "axios";
import "./Signin.scss";

const Signin = () => {
  const history = useHistory();

  const onFinish = async (values: any) => {
    const user = await axios.post("http://localhost:5000/User/login", {
      email: values.email,
      password: values.password,
    });
    console.log("user", user);
    history.push("/Auth/LoginAsUserOrDriver");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="contentImage">
      <img src="/imageAuth/imageAuth.jpg" className="imageAuth" />
      <div className="auth-signup-info">
        <LeftSquareOutlined
          onClick={() => history.push("/")}
          className="ClickRetourSignin"
        />
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
            rules={[{ type: "email", message: "The input is not valid E-mail!",  },
            { required: true, message: "Please input your E-mail!",  }, ]}   >


            <Input
              placeholder="Enter your Email"
              style={{ width: "80%" }}
              prefix={<MailOutlined />}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[ { required: true,  message: "Please input your password!",  }, ]} hasFeedback >

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
              className="button "
              type="primary"
              htmlType="submit"
              style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
              value="Submit" >  Sign in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Signin;
