import React from 'react';
import { Form, Input, Select, Button, } from 'antd';
import { PhoneOutlined } from "@ant-design/icons"
import { useHistory } from "react-router-dom";


const { Option } = Select;
//  map filter forEach reduce 

const SignupPhone = () => {
  const [form] = Form.useForm();
  const history = useHistory();
  

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 75 }}>
        <Option value="70">+216</Option>
      </Select>
    </Form.Item>
  );
  return (
    <div className="contentImage">

      <img src="/imageMain/imageMain2.jpg" className="imageAuth" />

      <div className="auth">
        <h1>Sign-in </h1>
        <h4>Welcome back! </h4>
        <Form
          form={form}
          name="register"
          initialValues={{
            residence: ['zhejiang', 'hangzhou', 'xihu'],
            prefix: '86',
          }}
          scrollToFirstError
        ></Form>
        <Form.Item
          name="phone"
          rules={[{ required: false, message: 'Please input your phone number!' }]} >
         
          <Input className="input" prefix={ <PhoneOutlined /> }
            placeholder=" Phone number"
            style={{ width: '73%' }}
            addonBefore={prefixSelector} />
        </Form.Item>

        <Form.Item >

          <Button className="button" type="primary" htmlType="submit" 
          style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
            onClick={() => history.push("/Auth/SignupCode")}> sign-in </Button>
        </Form.Item>

      </div>
    </div>
  )
}
export default SignupPhone;
