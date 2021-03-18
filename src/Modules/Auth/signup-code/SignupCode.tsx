import React from 'react';
import { Form, Input, Button, } from 'antd';
import { useHistory } from "react-router-dom";
import { LockOutlined } from '@ant-design/icons';
//  map filter forEach reduce 

const SignupCode = () => {
  const [form] = Form.useForm();
  const history = useHistory();

  return (
    <div className="contentImage">

      <img src="/imageMain/imageMain2.jpg" className="imageAuth" />

      <div className="auth">
        <h1> Enter verification code </h1>
        <h4> Enter the 4-digit code sent to you at </h4>
        <Form.Item
          className="input"
          name="password"
          rules={[{ required: true, message: 'Please input your Code !' }]} >
          <Input prefix={<LockOutlined />}
            type="password"
            placeholder="  enter the 4-digit code"
            style={{ width: '74%' }}  />
        </Form.Item>
        <Form.Item >
          <Button className="button" type="primary" htmlType="submit" 
          style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
          onClick={() => history.push("/Auth/UserOrDriver")}> Next </Button>
        </Form.Item>

      </div>
    </div>
  )
}
export default SignupCode;
