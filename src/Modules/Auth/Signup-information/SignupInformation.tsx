import { Form, Input, Button } from 'antd';
import { useHistory } from "react-router-dom";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const SignupInformation = () => {
  const history = useHistory();


  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="contentImage">
      <img src="/imageMain/imageMain2.jpg" className="imageAuth" />
      <div className="auth-signup-info">
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'input your username !' }]}
          >
            <Input
              placeholder="UserName"
              style={{ width: '200%' }} />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'input your E-mail !',
              },
            ]}>
            <Input
              style={{ width: '200%' }}
              placeholder="Email" />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button className="button-signup-info" type="primary" htmlType="submit" 
            style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
             onClick={() => history.push("/Auth/SignupCode")}>Next </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default SignupInformation;
