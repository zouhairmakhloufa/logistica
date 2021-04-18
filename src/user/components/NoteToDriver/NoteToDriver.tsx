import { Input, Button } from "antd";
import { LeftSquareOutlined } from "@ant-design/icons"
import { useHistory } from "react-router-dom";
import "./NoteToDriver.scss"

const NoteToDriver = () => {
  const history = useHistory();
  return (
    <div className="contentImage">
      <img src="/imageAuth/imageAuth.jpg" className="imageAuth" />
      <div className="NoteToDriverAuth">

        <LeftSquareOutlined onClick={() => history.push("/PaymentMethode")} className="ClickRetourNoteToDriver" />
        <h2> Add note to driver</h2>

        <Input placeholder="E.g I am located on the right side of" className="inputnotetodriver" />
        <Button className="button-NoteDriver" type="primary" htmlType="submit"
          style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
          onClick={() => history.push("/Info")} > Add{" "}
        </Button>
      </div>
    </div>
  );
};
export default NoteToDriver;