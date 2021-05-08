import { useHistory } from "react-router-dom";
import { LeftSquareOutlined } from "@ant-design/icons";
import { Button, Select, Form } from "antd";
import { useContext } from "react";
import BookinContext from "../../../context/booking";
import "./PaymentMethode.scss";

const { Option } = Select;

const PaymentMethode = () => {
  const history = useHistory();

  const { setPaymentMethode, paymentMethode }: any = useContext(BookinContext);
  console.log("Payment Methode :", paymentMethode);

  const onSubmit = async (event: any) => {
    history.push("/NoteToDriver");
  };

  return (
    <div className="contentImage">
      <img src="/imagePaymentUser/PaymentUser.jpg" className="imageAuth" />
      <div className="PaymentMethode">
        <LeftSquareOutlined
          onClick={() => history.push("/Service")}
          className="ClickRetourPaymentMethode"
        />
        <h2 className="text"> Payment Methode </h2>

        <div className="MethodePayment">
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onSubmit}
          >
            <div>
              <Select
                defaultValue="cache"
                style={{ width: 120 }}
                bordered={false}
                className="SelectPaymentMethode"
                onChange={setPaymentMethode}
              >
                <Option value="Cache">Cache</Option>
                <Option value="salurt">salurt</Option>
                <Option value="Carte" disabled>
                  {" "}
                  Carte
                </Option>
              </Select>
            </div>

            <Button
              className="buttonPaymentMethode"
              type="primary"
              htmlType="submit"
              style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
              value="Submit"
            >
              {" "}
              Next{" "}
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default PaymentMethode;
