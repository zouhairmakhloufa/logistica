import { Input, Button, Form } from "antd";
import { useContext } from "react";
import { LeftSquareOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import BookinContext from "../../../context/booking";
import "./NoteToDriver.scss";

const NoteToDriver = () => {
  const history = useHistory();
  const { setNoteToDriver, noteToDriver }: any = useContext(BookinContext);
  console.log("Note To Driver :", noteToDriver);

  const onSubmit = async (event: any) => {
    history.push("/Info");
  };

  return (
    <div className="contentImage">
      <img src="/note/note2.jpg" className="imageAuth" />
      <div className="NoteToDriverAuth">
        <LeftSquareOutlined
          onClick={() => history.push("/PaymentMethode")}
          className="ClickRetourNoteToDriver"
        />
        <h2> Add note to driver</h2>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onSubmit}
        >
          <Input
            placeholder="E.g I am located on the right side of"
            className="inputnotetodriver"
            onChange={(event) => setNoteToDriver(event.target.value)}
          />
          <Button
            className="button-NoteDriver"
            type="primary"
            htmlType="submit"
            style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
          >
            {" "}
            Add{" "}
          </Button>
        </Form>
      </div>
    </div>
  );
};
export default NoteToDriver;
