import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Select, InputNumber,Alert } from "antd";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import axios from "axios";
import "./SignupDriver.scss";

const SignupDriver = () => {
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [TypeOfCars, setTypeOfCars] = useState("");
  const [numDeTelf, setNumDeTelf] = useState("");
  const [basePrice, setBasePrice] = useState(0);
  const [klmPrice, setKlmPrice] = useState(0);
  const [status, setStatus] = useState("");

  const onSubmit = async (event: any) => {
    const registered = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      TypeOfCars,
      type: "driver",
      numDeTelf,
      basePrice,
      klmPrice,
    };
  try {
      const user = await axios.post(
      "http://localhost:5000/User/signup",
      registered
    );
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
    setTypeOfCars("");
    setNumDeTelf("");
    setBasePrice(0);
    setKlmPrice(0);
    history.push("/Auth/Signin");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const { Option } = Select;
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 85 }}>
        <Option value="+216">+216</Option>
      </Select>
    </Form.Item>
  );
  return (
    <div className="contentImage">
      <img src="/imageAuth/SignUp3.jpg" className="imageAuth" />
      <div className="signup-info-Driver">
      {status === "succes" && (
           <Alert message="successfully done" type="success" showIcon closable />
        )}
        {status === "error" && (
        <Alert message="Error" type="error" showIcon closable />
        )}
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
              placeholder="Enter your FirstName"
              style={{ width: "70%" }}
              prefix={<UserOutlined />}
              onChange={(event) => setFirstName(event.target.value)}
              value={firstName}
            />
          </Form.Item>

          <Form.Item
            name="lastName"
            rules={[{ required: true, message: "Enter Your lastName !" }]}
          >
            <Input
              placeholder="Enter Your lastName"
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
              placeholder="Enter Your Email"
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
              placeholder="Enter Your Password"
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
              { required: true, message: "Please Confirm Your Password!" },
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
          <div className="carsInfo">
            <Form.Item
              name="CarInfo"
              rules={[{ required: true, message: "Enter your CarInfo !" }]}
            >
              <Input
                placeholder="Enter your car name                       exemple Golf"
                style={{ width: "70%" }}
                onChange={(event) => setTypeOfCars(event.target.value)}
                value={TypeOfCars}
              />
            </Form.Item>

            <Form.Item
              name="BasePrice"
              rules={[{ required: true, message: "Enter Your base price !" }]}
            >
              <InputNumber
                min={1}
                max={2000}
                placeholder="base price"
                style={{ width: "40%" }}
                // @ts-ignore
                onChange={setBasePrice}
              />
            </Form.Item>
            <Form.Item
              name="KlmPrice"
              rules={[{ required: true, message: "Enter Your klm price !" }]}
            >
              <InputNumber
                min={1}
                max={2000}
                placeholder="klm price"
                style={{ width: "40%" }}
                // @ts-ignore
                onChange={setKlmPrice}
              />
            </Form.Item>
            <Form.Item
              className="NumberPhone"
              name="phone"
              rules={[{ required: true, message: "Please input your phone number!" }]}
            >
              <Input
                placeholder="Add your Phone Number"
                addonBefore={prefixSelector}
                style={{ width: "70%" }}
                onChange={(event) => setNumDeTelf(event.target.value)}
              />
            </Form.Item>
          </div>
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
export default SignupDriver;
