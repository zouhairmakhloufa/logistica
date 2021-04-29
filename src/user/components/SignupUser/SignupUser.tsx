import { Form, Input, Button } from "antd";
import { UserOutlined, MailOutlined,LockOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { LeftSquareOutlined } from "@ant-design/icons"
import axios from "axios";
import "./SignupUser.scss";

const SignupUser = () => {
  const history = useHistory();
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    const registered = { FirstName, LastName, Email, Password, ConfirmPassword };
    const user = await axios.post(
      "http://localhost:5000/User/ajouter",
      registered
    );
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="contentImage">
      <img src="/imageAuth/imageAuth.jpg" className="imageAuth" />
      <div className="signup-info-User">
        <LeftSquareOutlined onClick={() => history.push("/Auth/SignUpUserOrDriver")} className="ClickRetour" />
        <h2>Add Your</h2>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onSubmit}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item name="firstName" rules={[{ required: true, message: "Enter your firstName !" }]}>
            <Input
             placeholder="Enter your firstName" 
             style={{ width: "70%" }} 
             prefix={<UserOutlined />} 
             onChange={(event) => setFirstName(event.target.value)}
             value={FirstName}
             />
          </Form.Item>

          <Form.Item name="lastName" rules={[{ required: true, message: "Enter your lastName !" }]} >
            <Input 
            placeholder="Enter your lastName" 
            style={{ width: "70%" }} 
            prefix={<UserOutlined />} 
            onChange={(event) => setLastName(event.target.value)}
            value={LastName}
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[ { type: 'email', message: 'The input is not valid E-mail!', },
              { required: true,message: 'Please input your E-mail!', },]}
          >
            <Input 
            placeholder="Enter your Email" 
            style={{ width: "70%" }} 
            prefix={<MailOutlined /> }
            onChange={(event) => setEmail(event.target.value)}
            value={Email}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true,message: 'Please input your password!', }, ]}
            hasFeedback
          >
            <Input.Password 
            placeholder="Enter your Password" 
            style={{ width: "70%" }} 
            prefix={<LockOutlined /> }
            onChange={(event) => setPassword(event.target.value)}
            value={Password}
            />
          </Form.Item>

          <Form.Item name="confirm" dependencies={['password']}
           hasFeedback rules={[ { required: true,message: 'Please confirm your password!', },
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
            style={{ width: "70%" }}  
            prefix={<LockOutlined /> }
            onChange={(event) => setConfirmPassword(event.target.value)}
            value={ConfirmPassword}
            />
          </Form.Item>
          <div style={{ display: "flex" }} >
            <h5 style={{ marginRight: "50px" }} className="Already-have-an-account-Login">Already have an account ?</h5>
            <a href="/Auth/Signin" className="Signup"> Sign-in here</a>
          </div>
          <Form.Item >
            <Button
              className="button-signup-User"
              type="primary"
              htmlType="submit"
              style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
              onClick={() => history.push("/mapInformation")}
              value="Submit"
            >
              Add{" "}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default SignupUser;
